import axios from "axios"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const axiosSecure = axios.create({
     baseURL : 'http://localhost:3000'
})

const useAxiosSecure = () => {
   // Create these variables but don't initialize them yet
   let navigate;
   let logOut;
   
   try {
      // Try to use the hooks if we're in router context
      navigate = useNavigate();
      const auth = useContext(AuthContext);
      logOut = auth?.logOut;
   } catch (error) {
      // If we're not in router context, these will remain undefined
      console.log("Router context not available for navigation");
   }

   useEffect(() => {
      // Only set up response interceptor if navigate and logOut are available
      if (navigate && logOut) {
         const responseInterceptor = axiosSecure.interceptors.response.use(
            function (response) {
               return response;
            }, 
            async (error) => {
               const status = error.response?.status;
               console.log('status error in the interceptor', status);
               if(status === 401 || status === 403){
                  await logOut();
                  navigate('/login');
               }
               return Promise.reject(error);
            }
         );
         
         // Clean up interceptor on unmount
         return () => {
            axiosSecure.interceptors.response.eject(responseInterceptor);
         };
      }
   }, [navigate, logOut]);

   // Set up request interceptor (doesn't need router context)
   useEffect(() => {
      const requestInterceptor = axiosSecure.interceptors.request.use(
         function (config) {
            const token = localStorage.getItem('access-token');
            console.log('interceptor called', token);
            config.headers.authorization = `Bearer ${token}`;
            return config;
         }, 
         function (error) {
            return Promise.reject(error);
         }
      );
      
      // Clean up interceptor on unmount
      return () => {
         axiosSecure.interceptors.request.eject(requestInterceptor);
      };
   }, []);

   return [axiosSecure];
}

export default useAxiosSecure;