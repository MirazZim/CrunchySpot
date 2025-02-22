const MenuItem = ({item}) => {
    const {name, recipe, image, price} = item;
    return (
        <div className="flex space-x-4 items-center p-4 hover:bg-gray-50 transition-colors rounded-lg ">
            <img 
            style={{borderRadius: '0px 200px 200px 200px'}}
                src={image} 
                alt={name}
                className="w-[120px] h-[100px] object-cover rounded-lg"
            />
            <div className="flex-1">
                <h3 className="text-xl font-medium text-gray-900 mb-1">{name}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{recipe}</p>
            </div>
            <span className="text-lg font-semibold text-amber-600">${price}</span>
        </div>
    );
};

export default MenuItem;