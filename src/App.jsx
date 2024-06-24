import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import TODOsPage from './pages/TODOsPage';
import TODOPage, { TODOLoader } from './pages/TODOPage';
import AddTODOPage from './pages/AddTODOPage';
import NotFoundPage from './pages/NotFoundPage';


const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/todos" element={<TODOsPage />} />
                <Route path="/todos/:id" element={<TODOPage />} loader={TODOLoader} />
                <Route path="/add-todo" element={<AddTODOPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        )
    );

    return <RouterProvider router={router} />;
};

export default App;
