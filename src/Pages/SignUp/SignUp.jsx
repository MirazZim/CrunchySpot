import { Link } from "react-router-dom";
import LoginIllustration from "../../assets/others/authentication2.png";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import Cupcake_SignUP from "../../assets/others/signup.jpg";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const {
        register, handleSubmit, formState: { errors }, reset, } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user; 
            console.log(loggedUser);
            reset();
            navigate("/");
            Swal.fire({
                title: "Sweet! you have signed up successfully",
                imageUrl: Cupcake_SignUP,
                imageWidth: 400,
                imageHeight: 400,   
                imageAlt: "Custom image"
              });
        })
    }

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
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        {/* Full Name */}
                        <div>
                            <label className="block text-gray-700 font-medium">Full Name</label>
                            <input type="text" {...register("name", { required: true })} name="name" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                            {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-gray-700 font-medium">Email Address</label>
                            <input type="email" {...register("email", { required: true })} name="email" placeholder="example@mail.com" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                            {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-gray-700 font-medium">Password</label>
                            <input type="password" {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/

                            })} name="password" placeholder="••••••••" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />


                            {errors.password?.type === 'required' && <span className="text-red-500 text-sm">Password is required</span>}

                            {errors.password?.type === 'minLength' && <span className="text-red-500 text-sm">Password must be at least 6 characters</span>}

                            {errors.password?.type === 'maxLength' && <span className="text-red-500 text-sm">Password must be less than 20 characters</span>}

                            {errors.password?.type === 'pattern' && <span className="text-red-500 text-sm">Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character</span>}


                        </div>

                        {/* Submit Button */}
                        <input type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg text-lg font-semibold transition duration-300 ease-in-out hover:bg-blue-700" value="Sign Up" />

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