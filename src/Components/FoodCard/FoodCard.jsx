const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item;

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
      <button className="bg-amber-600 text-white font-bold py-3 px-6 rounded-full hover:bg-amber-700 transition duration-150 ease-in-out">
        ${price} - Add to cart
      </button>
    </div>
  );
};

export default FoodCard;