import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import UserPage from "./pages/user.jsx";
import TodoHome from "./components/todo/home.jsx";
import {AuthWrapper} from "./components/context/auth.context.jsx";
import BookPage from "./pages/book.jsx";
import PrivateRoute from "./pages/private.route.jsx";
import {ErrorPage} from "./pages/error.jsx";
import 'nprogress/nprogress.css';
import './styles/global.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <TodoHome/>
            },
            {
                path: "/users",
                element: (
                    <PrivateRoute>
                        <UserPage/>
                    </PrivateRoute>
                )
            },
            {
                path: "/books",
                element: (
                    <PrivateRoute>
                        <BookPage/>
                    </PrivateRoute>
                )
            },
        ]
    },
    {
        path: "/login",
        element: <LoginPage/>,
    },
    {
        path: "/register",
        element: <RegisterPage/>,
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
    <AuthWrapper>
        <RouterProvider router={router}/>
    </AuthWrapper>
    // </React.StrictMode>,
)
