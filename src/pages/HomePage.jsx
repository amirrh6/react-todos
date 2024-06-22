import Navbar from '../components/Navbar';
import Items from '../components/Items';
import ViewAllTODOs from '../components/ViewAllTODOs';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Items />
            <ViewAllTODOs />
        </>
    );
};

export default HomePage;
