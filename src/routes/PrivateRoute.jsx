import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();

    if(user){
        return children;
    }
    return <Navigate to={"/signIn"} state={location.pathname} />;
};

export default PrivateRoute;