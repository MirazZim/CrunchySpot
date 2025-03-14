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
    return <progress className="progress w-56"></progress>;
}

            if (user && isAdmin) {
    return children;
}

            return <Navigate to="/" state={{ from: location }} replace />;
}

export default AdminRoute;