const FoodCard = ({ item }) => {

    const {name, recipe, image, price} = item;
    
  return (
    <div className="flex space-x-4 items-center p-4 transition duration-150 ease-in-out hover:scale-105 hover:shadow-lg mb-4"
    
    
    >
      <img 
        style={{borderRadius: '0px 200px 200px 200px'}}
        src={image} 
        alt={name}
        className="w-[120px] h-[100px] object-cover rounded-lg transition duration-150 ease-in-out"
      />
      <div className="flex-1 transition duration-150 ease-in-out">
        <h3 className="text-xl font-medium text-gray-900 mb-1 transition duration-150 ease-in-out">{name}</h3>
        <p className="text-sm text-gray-600 line-clamp-2 transition duration-150 ease-in-out">{recipe}</p>
      </div>
      <span className="text-lg font-semibold text-amber-600 transition duration-150 ease-in-out">${price}</span>
    </div>
  )
}

export default FoodCard