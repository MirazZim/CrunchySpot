import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price, _id } = item;

  const {user} = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (food) => {
    if (user && user.email) {
      //send cart item to database
      const cartItem = { 
        foodId: _id, 
        email: user.email,
        name,
        image,
        price 
       }
       axios.post('http://localhost:3000/carts',cartItem)
       .then(res => {
         console.log(res.data)
         if(res.data.insertedId){
          Swal.fire({
            title: ` ${name} added to cart`,
            text: "Go to cart to complete the order",
            icon: "success",
            confirmButtonText: "OK"
          });
         }
       })

    } 
    else {
      //show please log in message

      Swal.fire({
        title: "You need to login first",
        text: "Please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location.pathname } });
        }
      });
    }
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
      <button 
      onClick={() => handleAddToCart(item)}
      className="bg-amber-600 text-white font-bold py-3 px-6 rounded-full hover:bg-amber-700 transition duration-150 ease-in-out">
        ${price} - Add to cart
      </button>
    </div>
  );
};

export default FoodCard;