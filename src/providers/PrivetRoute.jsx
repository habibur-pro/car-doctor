import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    if (loading) {
        return <p>Loading...</p>
    }

    if (user?.email) {
        return children
    }
    return <Navigate to='/signin' state={{ from: location }} replace></Navigate>
};

export default PrivetRoute;