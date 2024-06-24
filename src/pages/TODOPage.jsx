import { useParams, useLoaderData, Link } from 'react-router-dom';
import { FaCheckCircle, FaClock } from 'react-icons/fa';
import defaultTODOs from '../todos.json';
import { backend } from '../others/others';

const TODOPage = () => {
    // eslint-disable-next-line no-unused-vars
    const { id } = useParams();

    const todo = useLoaderData();

    return (
        <>
            <section>
                <div className="container m-auto py-6 px-6">
                    <Link
                        to="/todos"
                        className="text-indigo-500 hover:text-indigo-600 flex items-center"
                    >
                        <i className="fas fa-arrow-left mr-2"></i> Back to TODOs Listings
                    </Link>
                </div>
            </section>

            <section className="bg-indigo-50">
                <div className="container m-auto py-10 px-6">
                    <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                        <main>
                            <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                                <div className="text-gray-500 mb-4">{todo.priority}</div>
                                <h1 className="text-3xl font-bold mb-4">{todo.title}</h1>
                                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                                    <i className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"></i>

                                    {todo.done ? (
                                        <h3 className="text-indigo-500 mb-2">
                                            Done
                                            <FaCheckCircle className="inline ml-1" />
                                        </h3>
                                    ) : (
                                        <h3 className="text-orange-700 mb-2">
                                            Pending
                                            <FaClock className="inline ml-1" />
                                        </h3>
                                    )}
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                                    TODO Description
                                </h3>

                                <p className="mb-4">{todo.description}</p>
                            </div>
                        </main>

                        <aside>
                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-xl font-bold mb-6">Manage TODO</h3>
                                <Link
                                    to={`/todos/edit/${todo.id}`}
                                    className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        alert('Work in Progress...');
                                    }}
                                >
                                    Edit TODO
                                </Link>
                                <button
                                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        alert('Work in Progress...');
                                    }}
                                >
                                    Delete TODO
                                </button>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    );
};

const TODOLoader = async ({ params }) => {
    if (backend == 'json-server') {
        const apiUrl = `/api/todos/${params.id}`;

        const res = await fetch(apiUrl);
        const data = await res.json();

        return data;
    } else if (backend == 'browser') {
        if (localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify(defaultTODOs['todos']));
        }

        const readTODOs = JSON.parse(localStorage.getItem('todos'));
        const foundObject = readTODOs.find((object) => object.id == params.id);

        return foundObject;
    }
};

export { TODOPage as default, TODOLoader };
