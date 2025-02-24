import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";

const Login = () => {
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const Lakar = { email, password };
        console.log(Lakar);
    };

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleValidateCaptcha = (e) => {
        e.preventDefault(); // Prevent form submission when validating captcha
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    };

    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content flex">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card md:w-1/2 max-w-sm shadow-2xl bg-slate-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        {/* Email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="example@domain.com"
                                className="input input-bordered input-primary rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                        </div>

                        {/* Password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="********"
                                className="input input-bordered rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        {/* Captcha */}
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input
                                ref={captchaRef}
                                type="text"
                                name="captcha"
                                placeholder="Type the captcha above"
                                className="input input-bordered"
                            />
                            <button
                                onClick={handleValidateCaptcha}
                                className="btn btn-ghost mt-3 btn-xs"
                            >
                                Validate Captcha
                            </button>
                        </div>

                        {/* Login Button */}
                        <div className="form-control mt-6">
                            <input
                                disabled={disabled}
                                className="btn btn-primary"
                                type="submit"
                                value="Login"
                            />
                        </div>
                    </form>
                    <p className="px-6">
                        <small>New Here? <Link to="/signup">Create an account</Link></small>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;