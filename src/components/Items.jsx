/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import Item from './Item';
import Spinner from './Spinner';

const Items = ({ returnRecentOnly = false }) => {
    // console.log(todos);

    const [todos, setTODOs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTODOs = async () => {
            try {
                const apiUrl = !returnRecentOnly ? '/api/jobs' : '/api/jobs?_limit=6';

                const res = await fetch(apiUrl);
                const data = await res.json();
                setTODOs(data);
            } catch (error) {
                console.error('Error', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTODOs();
    }, []);

    // const TODOsList = returnRecentOnly ? todos.slice(0, 6) : todos;
    const TODOsList = todos;

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
