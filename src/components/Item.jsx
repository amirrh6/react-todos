/* eslint-disable react/prop-types */

import { useState } from 'react';
import { FaCheckCircle, FaClock, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Item = ({ todo }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    let description = todo.description;

    if (!showFullDescription) {
        description = description.substring(0, 200) + '...';
    }

    return (
        <div key={todo.id} className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
                <div className="mb-6">
                    <div className="text-gray-600 my-2">{todo.priority}</div>
                    <h3 className="text-xl font-bold">{todo.title}</h3>
                </div>

                <div className="mb-5">{description}</div>

                <button
                    // See https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state
                    // We pass a function which calls setShowFullDescription and passes a function which returns something based on previous state.
                    // Once the state changes the component re-renders.
                    onClick={() => setShowFullDescription((prevState) => !prevState)}
                    className="text-indigo-500 mb-5 hover:text-indigo-600"
                >
                    {showFullDescription ? 'less' : 'more'}
                    {!showFullDescription ? (
                        <FaChevronDown className="inline ml-1" />
                    ) : (
                        <FaChevronUp className="inline ml-1" />
                    )}
                </button>

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

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                    <Link
                        to={`/todos/${todo.id}`}
                        className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                    >
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Item;
