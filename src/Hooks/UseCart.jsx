import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"
import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider"

// This function helps us get the items in the cart from the server
const UseCart = () => {
    // We get the axiosSecure function from the useAxiosSecure hook
    const [axiosSecure] = useAxiosSecure()

    const {user} = useContext(AuthContext);

    // We use the useQuery hook from Tan stack to get the items in the cart
    // We give it a unique key 'cart' and a function that gets the data
    const {refetch, data: cart = [] } = useQuery({


        // This is the key that stores the data in the cache
        queryKey: ['cart', user?.email],


        // This is the function that gets the data
        queryFn: async () => {

            // We call the get method of the axiosSecure function to get the items in the cart
            const res = await axiosSecure.get(`/carts?email=${user?.email}`);
            
            
            // We return the data we got from the server
            return res.data
        }
    })
    // We return the items in the cart
    return [cart, refetch]
}

export default UseCart