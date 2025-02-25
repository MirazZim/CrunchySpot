import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider";

import LoginIllustration from "../../assets/others/authentication2.png";

const Login = () => {
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    const { logIn } = useContext(AuthContext);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(result => {
                console.log(result.user);
            });
    };

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        setDisabled(!validateCaptcha(user_captcha_value));
    };

    return (
        <div className="min-h-screen flex items-center justify-center g-gradient-to-r from-gray-50 via-yellow-50 to-gray-200 p-6">
            <div className="w-full max-w-3xl bg-yellow-50 shadow-xl rounded-lg p-8 flex flex-col md:flex-row">
                {/* Illustration */}
                <div className="hidden md:flex md:w-1/2 items-center justify-center">
                    <img src={LoginIllustration} alt="Login Illustration" className="w-full h-auto object-cover" />
                </div>

                {/* Login Form */}
                <div className="md:w-1/2 w-full p-6">
                    <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Sign In</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Email */}
                        <div>
                            <label className="block text-gray-700 font-medium">Email</label>
                            <input type="email" name="email" placeholder="Enter your email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" required />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-gray-700 font-medium">Password</label>
                            <input type="password" name="password" placeholder="Enter your password" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" required />
                        </div>

                        {/* Captcha */}
                        <div>
                            <LoadCanvasTemplate />
                            <div className="flex items-center gap-2 mt-2">
                                <input ref={captchaRef} type="text" placeholder="Enter Captcha" className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                                <button type="button" onClick={handleValidateCaptcha} className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    Validate
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" disabled={disabled} className="w-full bg-blue-600 text-white p-3 rounded-lg text-lg font-semibold transition duration-300 ease-in-out hover:bg-blue-700 disabled:bg-gray-400">Sign In</button>
                    </form>

                    {/* Register Link */}
                    <p className="text-center mt-4 text-gray-600">
                        <Link to="/signup" className="text-blue-600 hover:underline">New here? Create an Account</Link>
                    </p>

                    {/* Social Login */}
                    <p className="text-center mt-4 text-gray-500">Or login with</p>
                    <div className="flex justify-center space-x-4 mt-3">
                        <button className="flex items-center justify-center w-1/2 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition shadow-sm">Google</button>
                        <button className="flex items-center justify-center w-1/2 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition shadow-sm">GitHub</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
