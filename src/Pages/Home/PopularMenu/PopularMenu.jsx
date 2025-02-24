import { useEffect } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useState } from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";
import { Link } from "react-router-dom";
const PopularMenu = () => {

  const [menu, loading] = useMenu();
  const popularItems = menu.filter((item) => item.category === "popular");

  /*  const [menu, setMenu] = useState([]);
   useEffect(() => {
     fetch("menu.json")
       .then((res) => res.json())
       .then((data) => {
         const popularItems = data.filter((item) => item.category === "popular");
         setMenu(popularItems);
       });
   }, []); */

  return (
    <section className="mb-12">
      <SectionTitle heading="From Our Menu" subHeading="Popular Items" />
      <div
        className="grid md:grid-cols-2 gap-10 rounded-lg p-8 bg-gradient-to-r from-gray-50 to-gray-300"
        style={{
          boxShadow:
            "inset 0 4px 6px -1px rgba(0, 0, 0, 0.2), inset 0 2px 4px -2px rgba(0, 0, 0, 0.2), inset 0 -4px 6px -1px rgba(0, 0, 0, 0.2), inset 0 -2px 4px -2px rgba(0, 0, 0, 0.2)"
        }}
      >
        {
          // Here we are taking each item from the menu array
          // and creating a MenuItem component for it
          // We give each MenuItem a unique key using the item's ID
          // And pass the full item data as a prop
          popularItems.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))
        }
        <div className="flex items-center justify-center mt-8">
                <Link to="/menu">
                    <button
                        className="btn bg-[#16453D] hover:bg-[#12332E] text-gray-100 font-medium rounded-full px-8 py-3 text-base shadow-lg shadow-[#16453D]/50 transition duration-300 ease-in-out hover:scale-105"
                        style={{
                            boxShadow:
                                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                        }}
                    >
                        View and Order It
                        <svg
                            className="w-6 h-6 ml-2 -mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            ></path>
                        </svg>
                    </button>
                </Link>
            </div>
      </div>
    </section>
  );
};

export default PopularMenu;
