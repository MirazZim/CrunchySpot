import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const UserHome = () => {
    const { user } = useContext(AuthContext);

    // Dynamic Greeting Function
    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return "Good Morning";
        if (hour < 18) return "Good Afternoon";
        return "Good Evening";
    };

    return (
        <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen p-8 space-y-6">

            {/* Greeting & Profile Picture */}
            <div className="flex items-center gap-4">
                {user?.photoURL ? (
                    <img 
                        src={user.photoURL} 
                        alt="User Avatar"
                        className="w-24 h-24 rounded-full shadow-md border-4 border-blue-500"
                    />
                ) : (
                    <FaUserCircle className="text-blue-500 text-7xl" />
                )}
                <h2 className="text-4xl font-bold text-blue-600">
                    {getGreeting()}, {user?.displayName || "Back"}!
                </h2>
            </div>

            {/* User Info Section */}
            <div className="text-lg text-gray-700 space-y-2">
                <p><strong>Email:</strong> {user?.email || "N/A"}</p>
                <p><strong>Account Created:</strong> {user?.metadata?.creationTime || "Unknown"}</p>
                <p><strong>Last Login:</strong> {user?.metadata?.lastSignInTime || "N/A"}</p>
            </div>
        </div>
    );
};

export default UserHome;
