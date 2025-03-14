import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";

import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useMenu from "../../Hooks/useMenu";

const FoodCardForAdmin = ({ item, onDelete }) => {
  const { name, recipe, image, price, _id } = item;

  const {user} = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const [axiosSecure] = useAxiosSecure();
  

  const handleUpdate = () => {
    navigate(`/update/${_id}`, { state: { from: location.pathname } });
  }

  const handleDelete = (item) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.delete(`/menu/${_id}`);
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            // Call the parent component's onDelete callback instead of refetch
            if (onDelete) {
              onDelete(_id);
            }
            
            Swal.fire({
              title: ` ${name} added to cart`,
              text: "Go to cart to complete the order",
              icon: "success",
              confirmButtonText: "OK"
            });
          }
        } catch (error) {
          console.error("Error deleting item:", error);
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: `Failed to delete ${name}`,
            text: 'Please try again or check your authorization',
            showConfirmButton: false,
            timer: 2000
          });
        }
      }
    });
  }

  return (
    <div className="flex flex-col space-y-6 items-center p-8 border-2 border-gray-300 rounded-lg transition duration-150 ease-in-out hover:scale-105 hover:shadow-lg mb-6">
      <img
        src={image}
        alt={name}
        className="w-full h-[200px] object-cover rounded-t-lg transition duration-150 ease-in-out"
      />
      <div className="flex flex-col p-4">
        <h3 className="text-2xl font-medium text-gray-900 mb-2">{name}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{recipe}</p>
      </div>
      <div className="w-full h-[1px] bg-gray-300 my-4"></div>
      <div className="flex space-x-4">
        <Link to = {`/dashboard/updateItem/${_id}`}>
        <button 
        onClick={handleUpdate}
        className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-150 ease-in-out">
          Update
        </button>
        </Link>
        <button 
        onClick={handleDelete}
        className="bg-red-600 text-white font-bold py-3 px-6 rounded-full hover:bg-red-700 transition duration-150 ease-in-out">
          Delete
        </button>
      </div>
    </div>
  );
};

export default FoodCardForAdmin;