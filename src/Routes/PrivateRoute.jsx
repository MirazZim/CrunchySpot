import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const PrivateRoute = ({ children }) => {
    const auth = useContext(AuthContext); // ✅ Check if AuthContext is null
    const location = useLocation();

    if (!auth) {
        return <p>Loading...</p>; // ✅ Show a fallback instead of breaking
    }

    const { user, loading } = auth;

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoute;
