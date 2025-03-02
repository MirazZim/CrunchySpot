import { useForm } from "react-hook-form"
import SectionTitle from "../../../Components/SectionTitle/SectionTitle"


const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
       }
    return (
        <div>
            <SectionTitle
                subHeading={"Whats New ?"}
                heading={"Add Items"}
            ></SectionTitle>

            <div className="max-w-4xl mx-auto p-8 mt-6 bg-white rounded-xl shadow-md border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Add New Recipe</h2>
                    {/* name  */}
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Recipe name*</label>
                        <input type="text" id="name" className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#16453D] focus:outline-none bg-white" placeholder="Enter recipe name" required {...register("name")} />
                    </div>
                     {/* category  */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category*</label>
                            <select id="category" className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#16453D] focus:outline-none bg-white" required {...register("category")}>
                                <option value="pizza">Pizza</option>
                                <option value="salad">Salad</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price*</label>
                            <input type="number" id="price" className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#16453D] focus:outline-none bg-white" placeholder="Enter price" required {...register("price")} />
                        </div>
                    </div>

                    {/* recipe  */}
                    <div>
                        <label htmlFor="recipe" className="block text-sm font-medium text-gray-700">Recipe Details*</label>
                        <textarea id="recipe" rows="4" className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#16453D] focus:outline-none bg-white" placeholder="Describe the recipe..." required {...register("recipe")} />
                    </div>
                     {/* image  */}
                    <div>
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
                        <input type="file" id="image" className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#16453D] focus:outline-none bg-white" {...register("image")} />
                    </div>

                    {/* add recipe  */}
                    <button type="submit" className="w-full bg-[#16453D] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#1B4A63] transition-all duration-300">Add Recipe</button>
                </form>
            </div>


        </div>
    )
}

export default AddItems