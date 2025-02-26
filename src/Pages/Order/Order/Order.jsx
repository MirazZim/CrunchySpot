import OrderBanner from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { useState, useEffect } from "react";
import useMenu from "../../../Hooks/useMenu";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OrderTab from "../OrderTab/OrderTab";
import { useParams, useNavigate } from "react-router-dom";

const Order = () => {
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
  const { category } = useParams();
  const navigate = useNavigate();
  const initialIndex = categories.indexOf(category) >= 0 ? categories.indexOf(category) : 0;
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  // Add useEffect to handle URL changes
  useEffect(() => {
    const categoryIndex = categories.indexOf(category);
    if (categoryIndex >= 0) {
      setTabIndex(categoryIndex);
    }
  }, [category, categories]);

  const handleTabSelect = (index) => {
    setTabIndex(index);
    navigate(`/order/${categories[index]}`);
  };

  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const dessert = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div className="bg-white">
      <Cover img={OrderBanner} title="Order Food" />
      <br />
      
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
            <OrderTab items={salad}/>
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza}/>
          </TabPanel>
          <TabPanel>
            <OrderTab items={soup}/>
          </TabPanel>
          <TabPanel>
            <OrderTab items={dessert}/>
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks}/>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;