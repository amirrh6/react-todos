import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import TODOsPage from './pages/TODOsPage';
import AddTODOPage from './pages/AddTODOPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/todos" element={<TODOsPage />} />
            <Route path="/add-todo" element={<AddTODOPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Route>
    )
);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
