import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)

    if(loading) {
        return <span className="loading loading-spinner text-primary flex justify-center items-center text-8xl"></span>
    }

    if(user) {
        return children
    }

    return <Navigate to="/login">

    </Navigate>
   ;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}