import OrderBanner from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";
import FoodCard from "../../../Components/FoodCard/FoodCard";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OrderTab from "../OrderTab/OrderTab";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();

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
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="flex justify-center gap-2 mb-7">
            <Tab className="px-6 py-3 rounded-full bg-gray-900 dark:bg-gray-800 text-gray-100 dark:text-gray-300 font-semibold shadow-lg transition duration-300 ease-in-out filter backdrop-blur-md">Salad</Tab>
            <Tab className="px-6 py-3 rounded-full bg-gray-900 dark:bg-gray-800 text-gray-100 dark:text-gray-300 font-semibold shadow-lg transition duration-300 ease-in-out filter backdrop-blur-md">Pizza</Tab>
            <Tab className="px-6 py-3 rounded-full bg-gray-900 dark:bg-gray-800 text-gray-100 dark:text-gray-300 font-semibold shadow-lg transition duration-300 ease-in-out filter backdrop-blur-md">Soup</Tab>
            <Tab className="px-6 py-3 rounded-full bg-gray-900 dark:bg-gray-800 text-gray-100 dark:text-gray-300 font-semibold shadow-lg transition duration-300 ease-in-out filter backdrop-blur-md">Dessert</Tab>
            <Tab className="px-6 py-3 rounded-full bg-gray-900 dark:bg-gray-800 text-gray-100 dark:text-gray-300 font-semibold shadow-lg transition duration-300 ease-in-out filter backdrop-blur-md">Drinks</Tab>
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