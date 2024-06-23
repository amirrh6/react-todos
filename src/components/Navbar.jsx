import { Link } from 'react-router-dom';

import logo from '../assets/images/logo.svg';

const Navbar = () => {
    return (
        <nav className="bg-indigo-700 border-b border-indigo-500">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                        <Link className="flex flex-shrink-0 items-center mr-4" to="/">
                            <img
                                className="h-10 w-auto"
                                src={logo}
                                // src="https://react.dev/images/brand/logo_dark.svg"
                                alt="React TODOs"
                            />
                            <span className="hidden md:block text-white text-2xl font-bold ml-2">
                                React TODOs
                            </span>
                        </Link>
                        <div className="md:ml-auto">
                            <div className="flex space-x-2">
                                <Link
                                    to="/"
                                    className="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/todos"
                                    className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                                >
                                    TODOs
                                </Link>
                                <Link
                                    to="/add-todo"
                                    className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                                >
                                    Add TODO
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
