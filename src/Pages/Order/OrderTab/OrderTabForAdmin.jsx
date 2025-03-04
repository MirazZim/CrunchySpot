
import FoodCardForAdmin from '../../../Components/FoodCard/FoodCardForAdmin'

const OrderTabForAdmin = ({items}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.length === 0 ? (
                <p className="text-center text-2xl font-bold">No item available</p>
              ) : (
                items.map((item) => <FoodCardForAdmin key={item._id} item={item} />)
              )}
            </div>
  )
}

export default OrderTabForAdmin