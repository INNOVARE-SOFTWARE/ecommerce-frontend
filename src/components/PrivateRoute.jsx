<<<<<<< HEAD
// PrivateRoute.js
=======
>>>>>>> 1e03c1195986aa472803063c7dcc412c3adeed9e
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ path, element }) => {
<<<<<<< HEAD

    const {logout} = useAuth()
=======
    const { logout } = useAuth();
>>>>>>> 1e03c1195986aa472803063c7dcc412c3adeed9e
    const isAuthenticated = localStorage.getItem('token');

    if (!isAuthenticated) {
        logout();
        return <Navigate to={'/login'} replace />;
    }
    return <Outlet />;
};

export default PrivateRoute;
<<<<<<< HEAD

=======
>>>>>>> 1e03c1195986aa472803063c7dcc412c3adeed9e
