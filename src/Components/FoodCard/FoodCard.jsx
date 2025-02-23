const FoodCard = ({ item }) => {

    const {name, recipe, image, price} = item;
    
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="mt-4">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-gray-600">{recipe}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-xl font-bold">${price}</p>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
          Order Now
        </button>
      </div>
    </div>
  )
}

export default FoodCard