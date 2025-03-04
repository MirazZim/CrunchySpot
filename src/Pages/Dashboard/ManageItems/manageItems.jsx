import SectionTitle from "../../../Components/SectionTitle/SectionTitle"
import { useState, useEffect } from "react";
import useMenu from "../../../Hooks/useMenu";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { useParams, useNavigate } from "react-router-dom";
import OrderTabForAdmin from "../../Order/OrderTab/OrderTabForAdmin";


const manageItems = () => {

    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    
    const initialIndex = categories.indexOf(category) >= 0 ? categories.indexOf(category) : 0;
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu, loading, refetch] = useMenu();
    const [localMenu, setLocalMenu] = useState([]);
  
    // Update localMenu when menu changes
    useEffect(() => {
      if (menu && menu.length > 0) {
        setLocalMenu([...menu]);
      }
    }, [menu]);

    // Add useEffect to handle URL changes
    useEffect(() => {
      const categoryIndex = categories.indexOf(category);
      if (categoryIndex >= 0) {
        setTabIndex(categoryIndex);
      }
    }, [category, categories]);
  
    const handleTabSelect = (index) => {
      setTabIndex(index);
    };

    const handleDeleteItem = (deletedItemId) => {
      // Update local state immediately for a responsive UI
      setLocalMenu(prevMenu => prevMenu.filter(item => item._id !== deletedItemId));
      
      // Refetch the menu data from the server
      refetch();
    };
  
    // Filter using localMenu instead of menu
    const salad = localMenu.filter((item) => item.category === "salad");
    const pizza = localMenu.filter((item) => item.category === "pizza");
    const soup = localMenu.filter((item) => item.category === "soup");
    const dessert = localMenu.filter((item) => item.category === "dessert");
    const drinks = localMenu.filter((item) => item.category === "drinks");
  
  return (
    <div>
        <SectionTitle heading="Manage Items" subHeading="Please Check" />

        <div className="bg-white">
      
      
      <div className="container mx-auto p-4 rounded-lg bg-gradient-to-r from-gray-50 to-gray-300"
       style={{
        boxShadow:
          " inset 0 4px 6px -1px rgba(0, 0, 0, 0.2), inset 0 2px 4px -2px rgba(0, 0, 0, 0.2), inset 0 -4px 6px -1px rgba(0, 0, 0, 0.2), inset 0 -2px 4px -2px rgba(0, 0, 0, 0.2)"
      }}>
        <Tabs selectedIndex={tabIndex} onSelect={handleTabSelect}>
          <TabList className="flex justify-center gap-2 mb-7">
            <Tab className="btn bg-[#16453D] hover:bg-[#12332E] text-gray-100 font-medium rounded-full px-8 py-3 text-base shadow-lg shadow-[#16453D]/50 transition duration-300 ease-in-out hover:scale-105" style={{ boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}>Salad</Tab>
            <Tab className="btn bg-[#16453D] hover:bg-[#12332E] text-gray-100 font-medium rounded-full px-8 py-3 text-base shadow-lg shadow-[#16453D]/50 transition duration-300 ease-in-out hover:scale-105" style={{ boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}>Pizza</Tab>
            <Tab className="btn bg-[#16453D] hover:bg-[#12332E] text-gray-100 font-medium rounded-full px-8 py-3 text-base shadow-lg shadow-[#16453D]/50 transition duration-300 ease-in-out hover:scale-105" style={{ boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}>Soup</Tab>
            <Tab className="btn bg-[#16453D] hover:bg-[#12332E] text-gray-100 font-medium rounded-full px-8 py-3 text-base shadow-lg shadow-[#16453D]/50 transition duration-300 ease-in-out hover:scale-105" style={{ boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}>Dessert</Tab>
            <Tab className="btn bg-[#16453D] hover:bg-[#12332E] text-gray-100 font-medium rounded-full px-8 py-3 text-base shadow-lg shadow-[#16453D]/50 transition duration-300 ease-in-out hover:scale-105" style={{ boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}>Drinks</Tab>
          </TabList>
          <TabPanel>
            <OrderTabForAdmin items={salad} onDeleteItem={handleDeleteItem} />
          </TabPanel>
          <TabPanel>
            <OrderTabForAdmin items={pizza} onDeleteItem={handleDeleteItem} />
          </TabPanel>
          <TabPanel>
            <OrderTabForAdmin items={soup} onDeleteItem={handleDeleteItem} />
          </TabPanel>
          <TabPanel>
            <OrderTabForAdmin items={dessert} onDeleteItem={handleDeleteItem} />
          </TabPanel>
          <TabPanel>
            <OrderTabForAdmin items={drinks} onDeleteItem={handleDeleteItem} />
          </TabPanel>
        </Tabs>
      </div>
    </div>


    </div>
  )
}

export default manageItems