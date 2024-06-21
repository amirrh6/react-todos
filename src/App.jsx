import Navbar from './components/Navbar';
import Items from './components/Items';
import ViewAllTODOs from './components/ViewAllTODOs';

const App = () => {
    return (
        <>
            <Navbar />
            <Items />

            <section className="m-auto max-w-lg my-10 px-6">
                <a
                    href="#"
                    className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
                >
                    View All TODOs
                </a>
            </section>
        </>
    );
};

export default App;
