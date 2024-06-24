/* eslint-disable react/prop-types */
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddTODOPage = ({ addTODOSubmit }) => {
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('Low-priority');
    const [description, setDescription] = useState('');

    const navigate = useNavigate();

    const submitForm = (event) => {
        event.preventDefault();

        const newTODO = {
            title,
            priority,
            description
        };

        addTODOSubmit(newTODO);
        toast.success('TODO added successfully!');
        return navigate('/todos');
    };

    return (
        <section className="bg-indigo-50">
            <div className="container m-auto max-w-2xl py-24">
                <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                    <form onSubmit={submitForm}>
                        <h2 className="text-3xl text-center font-semibold mb-6">Add TODO</h2>

                        <div className="mb-4">
                            <label
                                htmlFor="priority"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                TODO priority
                            </label>
                            <select
                                id="priority"
                                name="priority"
                                className="border rounded w-full py-2 px-3"
                                required
                                value={priority}
                                onChange={(event) => setPriority(event.target.value)}
                            >
                                <option value="High-priority">High-priority</option>
                                <option value="Medium-priority">Medium-priority</option>
                                <option value="Low-priority">Low-priority</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">TODO title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                className="border rounded w-full py-2 px-3 mb-2"
                                placeholder="eg. Do the laundry"
                                required
                                value={title}
                                onChange={(event) => setTitle(event.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="description"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                className="border rounded w-full py-2 px-3"
                                rows="4"
                                placeholder="Gather sport clothes and take them to ..."
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}
                            ></textarea>
                        </div>

                        <div>
                            <button
                                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Add TODO
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddTODOPage;
