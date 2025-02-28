import  { useContext } from 'react'
import { FaGoogle, FaGithub } from 'react-icons/fa'
import { AuthContext } from '../../Providers/AuthProvider'
import useAxiosOpenForAll from '../../Hooks/useAxiosOpenForAll';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext);
    const axiosOpenForAll = useAxiosOpenForAll();
    const navigate = useNavigate();
    const location = useLocation();

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);

                const userInfo = {
                    email: user?.email,
                    name: user?.displayName,
                }
                axiosOpenForAll.post("/users", userInfo)
                    .then(res => {
                        if (res.data) {
                            navigate(location?.state?.from || "/");
                        }
                    })
            })
    }

    
    return (
        <div>
            <div className="flex justify-center space-x-4 mt-3">
                <button onClick={handleGoogleLogin} className="flex items-center justify-center w-1/2 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition shadow-sm">
                    <FaGoogle className="mr-3 text-lg text-black" />
                    Google
                </button>   

                <button className="flex items-center justify-center w-1/2 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition shadow-sm">
                    <FaGithub className="mr-3 text-lg text-black" />
                    GitHub
                </button>
            </div>
        </div>
    )
}

export default SocialLogin