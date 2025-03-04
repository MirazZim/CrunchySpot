import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosOpenForAll from "../../../Hooks/useAxiosOpenForAll";



const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

const UpdateItem = () => {
  const {name, category, price, recipe, _id} = useLoaderData();
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const navigate = useNavigate();

  const axiosOpenForAll = useAxiosOpenForAll();
  const [axiosSecure] = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data)
    // image upload to img bb and then get an url
    const imageFile = { image: data.image[0] }
    const res = await axiosOpenForAll.post(imageHostingApi, imageFile, {
        headers: {
            "content-type": "multipart/form-data",
        },
    })

    if (res.data.success) {
        //now send the menu item data to the server with the image url
        const image = res.data.data.display_url;
        const menuItem = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            recipe: data.recipe,
            image
        }
        const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem)
        console.log(menuRes.data)
        if (menuRes.data.modifiedCount > 0) {
            //show success message 
            Swal.fire({
                title: ` ${menuItem.name} is updated to menu`,
                text: "Go to menu to complete the order",
                icon: "success",
                confirmButtonText: "OK" 
              });
            //   navigate(location?.state || '/dashboard/manageItems');
            navigate(`/dashboard/manageItems/`);

        }
    }
    console.log('with image url',res.data)
}

  return (
    <div>
      <SectionTitle heading="Update Item" subHeading="Please Update the Item" />

      <div className="max-w-4xl mx-auto p-8 mt-6 bg-white rounded-xl shadow-md border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Update Current Recipe</h2>
                {/* name  */}
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Recipe name*</label>
                        <input
                        defaultValue={name}
                        type="text" id="name" className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#16453D] focus:outline-none bg-white" placeholder="Enter recipe name" required {...register("name")} />
                    </div>
                    {/* category  */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category*</label>
                            <select defaultValue={category} id="category" className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#16453D] focus:outline-none bg-white" required {...register("category")}>
                                <option disabled value="default">Select a category</option>
                                <option value="pizza">Pizza</option>
                                <option value="salad">Salad</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price*</label>
                            <input type="number" defaultValue={price} id="price" className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#16453D] focus:outline-none bg-white" placeholder="Enter price" required {...register("price")} />
                        </div>
                    </div>

                    {/* recipe  */}
                    <div>
                        <label htmlFor="recipe" className="block text-sm font-medium text-gray-700">Recipe Details*</label>
                        <textarea defaultValue={recipe} id="recipe" rows="4" className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#16453D] focus:outline-none bg-white" placeholder="Describe the recipe..." required {...register("recipe")} />
                    </div>
                    {/* image  */}
                    <div>
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
                        <input type="file" id="image" className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#16453D] focus:outline-none bg-white" {...register("image")} />
                    </div>

                    {/* add recipe  */}
                    <button type="submit" className="w-full flex items-center justify-center bg-[#16453D] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#1B4A63] transition-all duration-300">
                        <FaUtensils className="mr-2" /> Update Recipe</button>
                </form>
            </div>
    </div>
  );
};

export default UpdateItem;