import { Link } from "react-router-dom"


const SignUp = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
            <div className="bg-white shadow-xl rounded-3xl overflow-hidden flex flex-col items-center p-8 w-full max-w-md border border-gray-200">
                
                <h1 className="text-3xl font-semibold text-gray-900 mt-6">Sign Up</h1>
                <p className="text-gray-500 text-sm mt-2">Create an account to get started</p>

                <form
                    
                    className="w-full mt-6 space-y-4">
                    <div className="">
                        <label className="block text-gray-600 font-medium">Full Name</label>
                        <input type="text" name="name" placeholder="Full Name" className="mt-2 w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <div className="">
                        <label className="block text-gray-600 font-medium">Email Address</label>
                        <input type="email" name="email" placeholder="example@mail.com" className="mt-2 w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <div className="">
                        <label className="block text-gray-600 font-medium">Password</label>
                        <input type="password" name="password" placeholder="••••••••" className="mt-2 w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <button className="w-full py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-xl font-semibold transition duration-200 shadow-md">Sign Up</button>
                </form>

                <p className="text-gray-500 text-sm mt-4">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-500 font-medium hover:underline">
                        Log In
                    </Link>
                </p>

                <div className="flex gap-4 mt-6 w-full">

                    <button className="flex items-center justify-center w-1/2 py-3 border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-100 transition shadow-sm"

                    >Google</button>
                    <button

                        className="flex items-center justify-center w-1/2 py-3 border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-100 transition shadow-sm"

                    >GitHub</button>
                </div>
            </div>
        </div>
    )
}

export default SignUp