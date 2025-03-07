import { FaAd, FaCalendar, FaHome, FaList, FaPaypal, FaPhone, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa"
import { NavLink, Outlet } from "react-router-dom"
import UseCart from "../Hooks/UseCart"
import { FaBookBookmark } from "react-icons/fa6";
import useAdmin from "../Hooks/useAdmin";


const Dashboard = () => {
    const [cart] = UseCart();
    const [isAdmin, isLoading, error] = useAdmin();

    if (isLoading) {
        return <div>Loading...</div>; // Display a loading indicator
    }

    if (error) {
        return <div>Error loading admin status.</div>; // Display an error message
    }

    return (
        /* Dashboard SideBar */
        <div className="flex h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
            <div className="flex flex-col w-64 backdrop-blur-sm bg-white/80 border-r border-gray-200 shadow-md">
                <div className="p-4 border-b border-gray-100">
                    <h2 className="text-lg font-medium text-black">My Dashboard</h2>
                </div>
                <nav className="flex-1 space-y-2 p-4 overflow-y-auto">
                    {
                        isAdmin ?
                            <>
                                {/* Admin Dashboard */}
                                <NavLink
                                    to="/dashboard/adminHome"
                                    className={({ isActive }) =>
                                        (isActive
                                            ? "bg-gradient-to-r from-gray-200 to-gray-100 text-gray-700 border-l-4 border-gray-400"
                                            : "hover:bg-gradient-   to-r hover:from-gray-100 hover:to-transparent text-gray-600") +
                                        " flex items-center px-4 py-3 rounded-xl transition-all duration-200 font-medium"
                                    }
                                >
                                    <FaHome className="mr-3 text-lg text-black" /> Admin Home
                                </NavLink>

                                <NavLink
                                    to="/dashboard/addItems"
                                    className={({ isActive }) =>
                                        (isActive
                                            ? "bg-gradient-to-r from-gray-200 to-gray-100 text-gray-700 border-l-4 border-gray-400"
                                            : "hover:bg-gradient-to-r hover:from-gray-100 hover:to-transparent text-gray-600") +
                                        " flex items-center px-4 py-3 rounded-xl transition-all duration-200 font-medium"
                                    }
                                >
                                    <FaUtensils className="mr-3 text-lg text-black" /> Add Items
                                </NavLink>

                                <NavLink
                                    to="/dashboard/manageItems"
                                    className={({ isActive }) =>
                                        (isActive
                                            ? "bg-gradient-to-r from-gray-200 to-gray-100 text-gray-700 border-l-4 border-gray-400"
                                            : "hover:bg-gradient-to-r hover:from-gray-100 hover:to-transparent text-gray-600") +
                                        " flex items-center px-4 py-3 rounded-xl transition-all duration-200 font-medium"
                                    }
                                >
                                    <FaList className="mr-3 text-lg text-black" /> Manage Items
                                </NavLink>

                                <NavLink
                                    to="/dashboard/manageBookings"
                                    className={({ isActive }) =>
                                        (isActive
                                            ? "bg-gradient-to-r from-gray-200 to-gray-100 text-gray-700 border-l-4 border-gray-400"
                                            : "hover:bg-gradient-to-r hover:from-gray-100 hover:to-transparent text-gray-600") +
                                        " flex items-center px-4 py-3 rounded-xl transition-all duration-200 font-medium"
                                    }
                                >
                                    <FaBookBookmark className="mr-3 text-lg text-black" /> Manage Bookings  ({cart.length})
                                </NavLink>

                                <NavLink
                                    to="/dashboard/users"
                                    className={({ isActive }) =>
                                        (isActive
                                            ? "bg-gradient-to-r from-gray-200 to-gray-100 text-gray-700 border-l-4 border-gray-400"
                                            : "hover:bg-gradient-to-r hover:from-gray-100 hover:to-transparent text-gray-600") +
                                        " flex items-center px-4 py-3 rounded-xl transition-all duration-200 font-medium"
                                    }
                                >
                                    <FaUsers className="mr-3 text-lg text-black" /> All Users
                                </NavLink>


                            </>
                            :

                            /* User Dashboard */
                            <>
                                <NavLink
                                    to="/dashboard/userHome"
                                    className={({ isActive }) =>
                                        (isActive
                                            ? "bg-gradient-to-r from-gray-200 to-gray-100 text-gray-700 border-l-4 border-gray-400"
                                            : "hover:bg-gradient-   to-r hover:from-gray-100 hover:to-transparent text-gray-600") +
                                        " flex items-center px-4 py-3 rounded-xl transition-all duration-200 font-medium"
                                    }
                                >
                                    <FaHome className="mr-3 text-lg text-black" /> User Home
                                </NavLink>

                                <NavLink
                                    to="/dashboard/reservation"
                                    className={({ isActive }) =>
                                        (isActive
                                            ? "bg-gradient-to-r from-gray-200 to-gray-100 text-gray-700 border-l-4 border-gray-400"
                                            : "hover:bg-gradient-to-r hover:from-gray-100 hover:to-transparent text-gray-600") +
                                        " flex items-center px-4 py-3 rounded-xl transition-all duration-200 font-medium"
                                    }
                                >
                                    <FaCalendar className="mr-3 text-lg text-black" /> Reservation
                                </NavLink>

                                <NavLink
                                    to="/dashboard/payment"
                                    className={({ isActive }) =>
                                        (isActive
                                            ? "bg-gradient-to-r from-gray-200 to-gray-100 text-gray-700 border-l-4 border-gray-400"
                                            : "hover:bg-gradient-to-r hover:from-gray-100 hover:to-transparent text-gray-600") +
                                        " flex items-center px-4 py-3 rounded-xl transition-all duration-200 font-medium"
                                    }
                                >
                                    <FaPaypal className="mr-3 text-lg text-black" /> Payment
                                </NavLink>
                                <NavLink
                                    to="/dashboard/paymentHistory"
                                    className={({ isActive }) =>
                                        (isActive
                                            ? "bg-gradient-to-r from-gray-200 to-gray-100 text-gray-700 border-l-4 border-gray-400"
                                            : "hover:bg-gradient-to-r hover:from-gray-100 hover:to-transparent text-gray-600") +
                                        " flex items-center px-4 py-3 rounded-xl transition-all duration-200 font-medium"
                                    }
                                >
                                    <FaPaypal className="mr-3 text-lg text-black" /> Payment History
                                </NavLink>

                                <NavLink
                                    to="/dashboard/cart"
                                    className={({ isActive }) =>
                                        (isActive
                                            ? "bg-gradient-to-r from-gray-200 to-gray-100 text-gray-700 border-l-4 border-gray-400"
                                            : "hover:bg-gradient-to-r hover:from-gray-100 hover:to-transparent text-gray-600") +
                                        " flex items-center px-4 py-3 rounded-xl transition-all duration-200 font-medium"
                                    }
                                >
                                    <FaShoppingCart className="mr-3 text-lg text-black" /> My Cart  ({cart.length})
                                </NavLink>

                                <NavLink
                                    to="/dashboard/review"
                                    className={({ isActive }) =>
                                        (isActive
                                            ? "bg-gradient-to-r from-gray-200 to-gray-100 text-gray-700 border-l-4 border-gray-400"
                                            : "hover:bg-gradient-to-r hover:from-gray-100 hover:to-transparent text-gray-600") +
                                        " flex items-center px-4 py-3 rounded-xl transition-all duration-200 font-medium"
                                    }
                                >
                                    <FaAd className="mr-3 text-lg text-black" /> Give a Review
                                </NavLink>

                                <NavLink
                                    to="/dashboard/bookings"
                                    className={({ isActive }) =>
                                        (isActive
                                            ? "bg-gradient-to-r from-gray-200 to-gray-100 text-gray-700 border-l-4 border-gray-400"
                                            : "hover:bg-gradient-to-r hover:from-gray-100 hover:to-transparent text-gray-600") +
                                        " flex items-center px-4 py-3 rounded-xl transition-all duration-200 font-medium"
                                    }
                                >
                                    <FaList className="mr-3 text-lg text-black" /> My Bookings
                                </NavLink>
                            </>
                    }

                    <div className="divider"></div>

                    {/* Add More Links */}
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
                        <FaShoppingCart className="mr-3 text-lg text-black" /> My Order
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
                </nav>
            </div>

            {/* Dashboard Page Content */}
            <div className="flex-1 p-6 overflow-auto">
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Dashboard