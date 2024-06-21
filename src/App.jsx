import Navbar from './components/Navbar';
import TODOs from './components/TODOs';

const App = () => {
    return (
        <>
            <Navbar />
            <TODOs />

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
