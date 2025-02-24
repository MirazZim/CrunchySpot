import { Link } from "react-router-dom"


const Login = () => {
  
 
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const Lakar = {email, password};
        console.log(Lakar);
    }


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
                        <input type="email" name="email" placeholder="example@domain.com" className="input input-bordered input-primary rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                    </div>

                    {/* Password */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="********" className="input input-bordered rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>  
                    <div className="form-control">
                        <label className="label">
                            
                        </label>
                        <input type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent" />

                    </div>
                    <div className="form-control mt-6">
                        {/* TODO: apply disabled for re captcha */}
                        <input disabled={false} className="btn btn-primary rounded-full px-8 py-2 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent" type="submit" value="Login" />
                    </div>
                </form>
                <p className='px-6'><small>New Here? <Link to="/signup">Create an account</Link> </small></p>
                
            </div>
        </div>
    </div>
    )
}

export default Login