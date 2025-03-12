import { useContext, useState } from "react";
import {
    FaAd, FaCalendar, FaHome, FaList, FaPaypal, FaPhone, FaShoppingCart, FaUsers, FaUtensils, FaBars, FaTimes, FaSignOutAlt,
    FaHistory,
    FaUser,
    FaFirstOrder,
    FaJediOrder
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import UseCart from "../Hooks/UseCart";
import { FaBookBookmark, FaCartPlus, FaCarTunnel } from "react-icons/fa6";
import useAdmin from "../Hooks/useAdmin";
import { AuthContext } from "../Providers/AuthProvider";
import { Button } from "@headlessui/react";

const Dashboard = () => {
    const [cart] = UseCart();
    const [isAdmin, isLoading, error] = useAdmin();
    const [isSidebarOpen, setSidebarOpen] = useState(true); // Sidebar toggle
    const { logOut } = useContext(AuthContext);

    // Loading Screen
    if (isLoading) {
        return (
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-blue-50 flex flex-col items-center justify-center text-center p-6">
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm">
                    <div className="flex flex-col items-center space-y-4">
                        <div className="animate-spin rounded-full border-4 border-blue-500 border-t-transparent w-16 h-16"></div>
                        <h1 className="text-2xl font-bold text-blue-600">Please Wait...</h1>
                        <p className="text-gray-600">Loading data... This may take a few seconds.</p>
                    </div>
                </div>
            </div>
        );
    }

    // Error Screen
    if (error) {
        return (
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-red-100 flex flex-col items-center justify-center text-center p-6">
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm">
                    <div className="flex flex-col items-center space-y-4">
                        <div className="bg-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center">
                            <FaTimes size={30} />
                        </div>
                        <h1 className="text-2xl font-bold text-red-600">JWT Error</h1>
                        <p className="text-gray-600">Sorry, we are fixing this issue ASAP. Meanwhile, Refresh the page to fix this issue.</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="bg-red-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-600 transition-all"
                        >
                            Retry
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">

            {/* Stylish Toggle Button (Visible on Small/Medium Screens) */}
            <button
                className={`absolute top-2 left-3 z-50 w-12 h-12 rounded-full 
                    ${isSidebarOpen ? "bg-emerald-900" : "bg-gray-800"} 
                    text-white flex items-center justify-center shadow-2xl
                    hover:scale-110 hover:bg-emerald-900 
                    transition-all duration-300 md:hidden`}
                onClick={() => setSidebarOpen(!isSidebarOpen)}
            >
                <div className={`transform transition-transform duration-300 ${isSidebarOpen ? 'rotate-45' : ''}`}>
                    {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </div>
            </button>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 w-64 h-full backdrop-blur-sm bg-white/90 border-r border-gray-200 shadow-md 
                    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
                    md:translate-x-0 md:relative transition-transform duration-300 ease-in-out z-40`}
            >
                {/* Dashboard Title */}
                <div className="p-4 mt-16 border-b border-gray-100">
                    <h2 className="text-lg font-medium text-black">My Dashboard</h2>
                </div>

                {/* Admin & User Navigation Links */}
                <nav className="flex-1 space-y-2 p-4 overflow-y-auto">
                    {isAdmin ? (
                        <>
                            {/* Admin Links */}
                            <NavLink to="/dashboard/AdminHome" className={({ isActive }) =>
                                (isActive
                                    ? "bg-gradient-to-r from-gray-200 to-gray-100 text-gray-700 border-l-4 border-gray-400"
                                    : "hover:bg-gradient-   to-r hover:from-gray-100 hover:to-transparent text-gray-600") +
                                " flex items-center px-4 py-3 rounded-xl transition-all duration-200 font-medium"
                            }>
                                <FaHome className="mr-3 text-lg text-black" /> Admin Home
                            </NavLink>

                            <NavLink to="/dashboard/addItems" className={({ isActive }) =>
                                (isActive
                                    ? "bg-gradient-to-r from-gray-200 to-gray-100 text-gray-700 border-l-4 border-gray-400"
                                    : "hover:bg-gradient-   to-r hover:from-gray-100 hover:to-transparent text-gray-600") +
                                " flex items-center px-4 py-3 rounded-xl transition-all duration-200 font-medium"
                            }>
                                <FaUtensils className="mr-3 text-lg text-black" /> Add Items
                            </NavLink>

                            <NavLink to="/dashboard/manageItems" className={({ isActive }) =>
                                (isActive
                                    ? "bg-gradient-to-r from-gray-200 to-gray-100 text-gray-700 border-l-4 border-gray-400"
                                    : "hover:bg-gradient-   to-r hover:from-gray-100 hover:to-transparent text-gray-600") +
                                " flex items-center px-4 py-3 rounded-xl transition-all duration-200 font-medium"
                            }>
                                <FaList className="mr-3 text-lg text-black" /> Manage Items
                            </NavLink>

                            <NavLink to="/dashboard/users" className={({ isActive }) =>
                                (isActive
                                    ? "bg-gradient-to-r from-gray-200 to-gray-100 text-gray-700 border-l-4 border-gray-400"
                                    : "hover:bg-gradient-   to-r hover:from-gray-100 hover:to-transparent text-gray-600") +
                                " flex items-center px-4 py-3 rounded-xl transition-all duration-200 font-medium"
                            }>
                                <FaUsers className="mr-3 text-lg text-black" /> All Users
                            </NavLink>
                        </>
                    ) : (
                        <>
                            {/* User Links */}
                            <NavLink to="/dashboard/UserHome" className={({ isActive }) =>
                                (isActive
                                    ? "bg-gradient-to-r from-gray-200 to-gray-100 text-gray-700 border-l-4 border-gray-400"
                                    : "hover:bg-gradient-   to-r hover:from-gray-100 hover:to-transparent text-gray-600") +
                                " flex items-center px-4 py-3 rounded-xl transition-all duration-200 font-medium"
                            }>
                                <FaUser className="mr-3 text-lg text-black" /> User Home
                            </NavLink>

                            <NavLink to="/dashboard/payment" className={({ isActive }) =>
                                (isActive
                                    ? "bg-gradient-to-r from-gray-200 to-gray-100 text-gray-700 border-l-4 border-gray-400"
                                    : "hover:bg-gradient-   to-r hover:from-gray-100 hover:to-transparent text-gray-600") +
                                " flex items-center px-4 py-3 rounded-xl transition-all duration-200 font-medium"
                            }>
                                <FaPaypal className="mr-3 text-lg text-black" /> Payment
                            </NavLink>
                            <NavLink to="/dashboard/paymentHistory" className={({ isActive }) =>
                                (isActive
                                    ? "bg-gradient-to-r from-gray-200 to-gray-100 text-gray-700 border-l-4 border-gray-400"
                                    : "hover:bg-gradient-   to-r hover:from-gray-100 hover:to-transparent text-gray-600") +
                                " flex items-center px-4 py-3 rounded-xl transition-all duration-200 font-medium"
                            }>
                                <FaHistory className="mr-3 text-lg text-black" /> Payment History
                            </NavLink>

                            <NavLink to="/dashboard/cart" className={({ isActive }) =>
                                (isActive
                                    ? "bg-gradient-to-r from-gray-200 to-gray-100 text-gray-700 border-l-4 border-gray-400"
                                    : "hover:bg-gradient-   to-r hover:from-gray-100 hover:to-transparent text-gray-600") +
                                " flex items-center px-4 py-3 rounded-xl transition-all duration-200 font-medium"
                            }>
                                <FaShoppingCart className="mr-3 text-lg text-black" /> My Cart ({cart.length})
                            </NavLink>
                        </>
                    )}

                    <div className="divider"></div>

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            (isActive
                                ? "bg-gradient-to-r from-gray-200 to-gray-100 text-gray-700 border-l-4 border-gray-400"
                                : "hover:bg-gradient-to-r hover:from-gray-100 hover:to-transparent text-gray-600") +
                            " flex items-center px-4 py-3 rounded-xl transition-all duration-200 font-medium"
                        }
                    >
                        <FaHome className="mr-3 text-lg text-black" /> My Home
                    </NavLink>
                    <NavLink
                        to="/order/salad"
                        className={({ isActive }) =>
                            (isActive
                                ? "bg-gradient-to-r from-gray-200 to-gray-100 text-gray-700 border-l-4 border-gray-400"
                                : "hover:bg-gradient-to-r hover:from-gray-100 hover:to-transparent text-gray-600") +
                            " flex items-center px-4 py-3 rounded-xl transition-all duration-200 font-medium"
                        }
                    >
                        <FaCartPlus className="mr-3 text-lg text-black" /> My Order
                    </NavLink>
                    <NavLink
                        to="/menu"
                        className={({ isActive }) =>
                            (isActive
                                ? "bg-gradient-to-r from-gray-200 to-gray-100 text-gray-700 border-l-4 border-gray-400"
                                : "hover:bg-gradient-to-r hover:from-gray-100 hover:to-transparent text-gray-600") +
                            " flex items-center px-4 py-3 rounded-xl transition-all duration-200 font-medium"
                        }
                    >
                        <FaUtensils className="mr-3 text-lg text-black" /> My Menu
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            (isActive
                                ? "bg-gradient-to-r from-gray-200 to-gray-100 text-gray-700 border-l-4 border-gray-400"
                                : "hover:bg-gradient-to-r hover:from-gray-100 hover:to-transparent text-gray-600") +
                            " flex items-center px-4 py-3 rounded-xl transition-all duration-200 font-medium"
                        }
                    >
                        <FaPhone className="mr-3 text-lg text-black" /> Contact
                    </NavLink>

                    {/* Shared Links */}
                    <Button onClick={logOut} className="flex items-center px-4 py-3 rounded-xl transition-all duration-200 font-medium text-black">
                        <FaSignOutAlt className="mr-3 text-lg text-black" /> Logout
                    </Button>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 overflow-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
