import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
} from 'react-router-dom';

import { backend } from './others/others';
import defaultTODOs from './todos.json';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import TODOsPage from './pages/TODOsPage';
import TODOPage, { TODOLoader } from './pages/TODOPage';
import AddTODOPage from './pages/AddTODOPage';
import NotFoundPage from './pages/NotFoundPage';
import EditTODOPage from './pages/EditTODOPage';

const updateTODO = async (todo) => {
    if (backend == 'json-server') {
        const apiUrl = `/api/todos/${todo.id}`;

        await fetch(apiUrl, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        });

        return;
    } else if (backend == 'browser') {
        if (localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify(defaultTODOs['todos']));
        }

        let readTODOs = JSON.parse(localStorage.getItem('todos'));

        readTODOs = readTODOs.map((object) =>
            object.id === todo.id ? { ...object, ...todo } : object
        );

        localStorage.setItem('todos', JSON.stringify(readTODOs));
    }
};

const deleteTODO = async (id) => {
    if (backend == 'json-server') {
        const apiUrl = `/api/todos/${id}`;

        await fetch(apiUrl, {
            method: 'DELETE'
        });

        return;
    } else if (backend == 'browser') {
        if (localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify(defaultTODOs['todos']));
        }

        let readTODOs = JSON.parse(localStorage.getItem('todos'));

        readTODOs = readTODOs.filter((object) => object.id != id);

        localStorage.setItem('todos', JSON.stringify(readTODOs));
    }
};

const addTODO = async (newTODO) => {
    if (backend == 'json-server') {
        const apiUrl = `/api/todos`;

        await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTODO)
        });

        return;
    } else if (backend == 'browser') {
        if (localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify(defaultTODOs['todos']));
        }

        const readTODOs = JSON.parse(localStorage.getItem('todos'));

        newTODO.id = readTODOs[readTODOs.length - 1]['id']
            ? +readTODOs[readTODOs.length - 1]['id'] + 1
            : '1';

        readTODOs.push(newTODO);
        localStorage.setItem('todos', JSON.stringify(readTODOs));
    }
};

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/todos" element={<TODOsPage />} />
                <Route
                    path="/todos/:id"
                    element={<TODOPage deleteTODO={deleteTODO} />}
                    loader={TODOLoader}
                />
                <Route
                    path="/edit-todo/:id"
                    element={<EditTODOPage updateTODOSubmit={updateTODO} />}
                    loader={TODOLoader}
                />
                <Route path="/add-todo" element={<AddTODOPage addTODOSubmit={addTODO} />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        )
    );

    return <RouterProvider router={router} />;
};

export default App;
