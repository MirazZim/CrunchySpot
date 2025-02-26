import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"

// This function helps us get the items in the cart from the server
const UseCart = () => {
    // We get the axiosSecure function from the useAxiosSecure hook
    const [axiosSecure] = useAxiosSecure()

    // We use the useQuery hook from Tan stack to get the items in the cart
    // We give it a unique key 'cart' and a function that gets the data
    const { data: cart = [] } = useQuery({
        // This is the key that stores the data in the cache
        queryKey: ['cart'],
        // This is the function that gets the data
        queryFn: async () => {
            // We call the get method of the axiosSecure function to get the items in the cart
            const res = await axiosSecure.get('/carts')
            // We return the data we got from the server
            return res.data
        }
    })
    // We return the items in the cart
    return [cart]
}

export default UseCart