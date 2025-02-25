import { Link } from "react-router-dom";
import LoginIllustration from "../../assets/others/authentication2.png";

const SignUp = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-50 via-yellow-50 to-gray-200 p-6">
            <div className="w-full max-w-3xl bg-yellow-50 shadow-xl rounded-lg p-8 flex flex-col md:flex-row">
                {/* Illustration */}
                <div className="hidden md:flex md:w-1/2 items-center justify-center">
                    <img src={LoginIllustration} alt="Sign Up Illustration" className="w-full h-auto object-cover" />
                </div>

                {/* Sign Up Form */}
                <div className="md:w-1/2 w-full p-6">
                    <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Sign Up</h2>
                    <p className="text-gray-500 text-sm text-center mb-4">Create an account to get started</p>
                    <form className="space-y-4">
                        {/* Full Name */}
                        <div>
                            <label className="block text-gray-700 font-medium">Full Name</label>
                            <input type="text" name="name" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" required />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-gray-700 font-medium">Email Address</label>
                            <input type="email" name="email" placeholder="example@mail.com" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" required />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-gray-700 font-medium">Password</label>
                            <input type="password" name="password" placeholder="••••••••" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" required />
                        </div>

                        {/* Submit Button */}
                        <button className="w-full bg-blue-600 text-white p-3 rounded-lg text-lg font-semibold transition duration-300 ease-in-out hover:bg-blue-700">Sign Up</button>
                    </form>

                    {/* Login Link */}
                    <p className="text-center mt-4 text-gray-600">
                        Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Log In</Link>
                    </p>

                    {/* Social Login */}
                    <p className="text-center mt-4 text-gray-500">Or sign up with</p>
                    <div className="flex justify-center space-x-4 mt-3">
                        <button className="flex items-center justify-center w-1/2 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition shadow-sm">Google</button>
                        <button className="flex items-center justify-center w-1/2 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition shadow-sm">GitHub</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;