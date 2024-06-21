/* eslint-disable react/prop-types */
const Item = ({ todo }) => {
    return (
        <div key={todo.id} className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
                <div className="mb-6">
                    <div className="text-gray-600 my-2">{todo.priority}</div>
                    <h3 className="text-xl font-bold">{todo.title}</h3>
                </div>

                <div className="mb-5">{todo.description}</div>

                {todo.done ? (
                    <h3 className="text-indigo-500 mb-2">Done</h3>
                ) : (
                    <h3 className="text-orange-700 mb-2">Pending</h3>
                )}

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                    <a
                        href="#"
                        className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                    >
                        Details
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Item;
