/* eslint-disable react/prop-types */
import todos from '../todos.json';
import Item from './Item';

const Items = ({ returnRecentOnly = false }) => {
    // console.log(todos);

    const TODOsList = returnRecentOnly ? todos.slice(0, 3) : todos;

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    Most recent TODOs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {TODOsList.map((todo) => (
                        <Item key={todo.id} todo={todo} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Items;
