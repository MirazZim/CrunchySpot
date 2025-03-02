import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

            if (loading || isAdminLoading) {
    return <p>Loading...</p>;
}

            if (user && isAdmin) {
    return <Navigate to="/login" state={{ from: location }} replace />;
}

            return children;
}

export default AdminRoute;