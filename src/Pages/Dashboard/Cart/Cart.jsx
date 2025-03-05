import { FaTrash } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import UseCart from "../../../Hooks/UseCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
    const [cart, refetch] = UseCart();
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    const [axiosSecure] = useAxiosSecure();

    const handleClearCart = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });
    }
    return (
        <div className="max-w-5xl mx-auto p-6 bg-gradient-to-r from-gray-50 to-gray-300 rounded-lg"
            style={{
                boxShadow:
                    "inset 0 4px 6px -1px rgba(0, 0, 0, 0.2), inset 0 2px 4px -2px rgba(0, 0, 0, 0.2), inset 0 -4px 6px -1px rgba(0, 0, 0, 0.2), inset 0 -2px 4px -2px rgba(0, 0, 0, 0.2)"
            }}>
            <SectionTitle heading="Shopping Cart" subHeading="Your Selected Items" />
            <div className="flex justify-between items-center p-8 rounded-lg bg-white shadow-md text-black">
                <h1 className="text-xl font-bold">Items: {cart.length}</h1>
                <h2 className="text-xl font-bold">Total Price: ${totalPrice.toFixed(2)}</h2>


                {/* Disable the "Proceed to Pay" button if there are no items in the cart. Otherwise, allow the user to click on it to proceed to the payment page. */}
                <Link to="/dashboard/payment"><button disabled={cart.length === 0} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300">
                    Proceed to Pay
                </button>
                </Link>
            </div>
            <div className="overflow-x-auto mt-6">
                <table className="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden text-black">
                    <thead>
                        <tr className="bg-gray-200 text-black font-semibold text-lg">
                            <th className="p-4">#</th>
                            <th className="p-4">Image</th>
                            <th className="p-4">Name</th>
                            <th className="p-4">Price</th>
                            <th className="p-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => (
                            <tr key={item._id} className="border-b border-gray-200 hover:bg-gray-100 text-lg">
                                <td className="p-4 text-center">{index + 1}</td>
                                <td className="p-4">
                                    <div className="flex justify-center">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-16 h-16 object-cover rounded-lg shadow-md"
                                        />
                                    </div>
                                </td>
                                <td className="p-4 font-semibold text-center">{item.name}</td>
                                <td className="p-4 text-center">${item.price.toFixed(2)}</td>
                                <td className="p-4 text-center">
                                    <button onClick={() => handleClearCart(item._id)} className="flex items-center justify-center gap-1 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold shadow-md transition-all duration-300">
                                        <FaTrash></FaTrash>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;