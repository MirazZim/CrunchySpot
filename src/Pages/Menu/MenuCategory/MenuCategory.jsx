import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const MenuCategory = ({items , title , coverImg}) => {
    return (
        <div>
               {title && <Cover img={coverImg} title={title}/> } 
            <div
                className="grid md:grid-cols-2 gap-10 rounded-lg p-8 bg-gradient-to-r from-gray-50 to-gray-300 mt-4"
                style={{
                    boxShadow:
                        "inset 0 4px 6px -1px rgba(0, 0, 0, 0.2), inset 0 2px 4px -2px rgba(0, 0, 0, 0.2), inset 0 -4px 6px -1px rgba(0, 0, 0, 0.2), inset 0 -2px 4px -2px rgba(0, 0, 0, 0.2)",
                }}
            >
                {
                    // Here we are taking each item from the menu array
                    // and creating a MenuItem component for it
                    // We give each MenuItem a unique key using the item's ID
                    // And pass the full item data as a prop
                    items.map((item) => (
                        <MenuItem key={item._id} item={item}></MenuItem>
                    ))
                }
                <div className="flex items-center justify-center">
                    <button className="btn mt-4 rounded-full border-0 w-full md:w-auto px-8 py-4">View full Menu</button>
                </div>
            </div>
        </div>
    )
}

export default MenuCategory;