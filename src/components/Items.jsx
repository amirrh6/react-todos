/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import Item from './Item';
import Spinner from './Spinner';
import defaultTODOs from '../todos.json';

const Items = ({ returnRecentOnly = false }) => {
    const recentCount = 3;

    const backend = 'browser'; // 'browser' | 'json-server'

    const [todos, setTODOs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTODOs = async () => {
            if (backend == 'json-server') {
                try {
                    const apiUrl = !returnRecentOnly
                        ? '/api/todos'
                        : `/api/todos?_limit=${recentCount}`;

                    const res = await fetch(apiUrl);
                    const data = await res.json();
                    setTODOs(data);
                } catch (error) {
                    console.error('Error', error);
                } finally {
                    setLoading(false);
                }
            } else if (backend == 'browser') {
                if (localStorage.getItem('todos') === null) {
                    localStorage.setItem('todos', JSON.stringify(defaultTODOs['todos']));
                }

                const readTODOs = JSON.parse(localStorage.getItem('todos'));
                console.log('readTODOs', readTODOs);

                setTODOs(readTODOs);
                setLoading(false);
            }
        };

        fetchTODOs();
    }, []);

    let TODOsList = [];
    if (backend == 'json-server') {
        TODOsList = todos;
    } else if (backend == 'browser') {
        TODOsList = returnRecentOnly ? todos.slice(0, recentCount) : todos;
    }

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {returnRecentOnly ? 'Most recent TODOs' : 'Browse TODOs'}
                </h2>

                {loading ? (
                    <Spinner loading={loading} />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {TODOsList.map((todo) => (
                            <Item key={todo.id} todo={todo} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Items;
