import Items from '../components/Items';
import ViewAllTODOs from '../components/ViewAllTODOs';

const HomePage = () => {
    return (
        <>
            <Items returnRecentOnly={true} />
            <ViewAllTODOs />
        </>
    );
};

export default HomePage;
