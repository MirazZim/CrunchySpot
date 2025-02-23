import OrderBanner from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";
import FoodCard from "../../../Components/FoodCard/FoodCard";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

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
      <br />
      <div className="container mx-auto p-4"
       style={{
        boxShadow:
          " inset 0 4px 6px -1px rgba(0, 0, 0, 0.2), inset 0 2px 4px -2px rgba(0, 0, 0, 0.2), inset 0 -4px 6px -1px rgba(0, 0, 0, 0.2), inset 0 -2px 4px -2px rgba(0, 0, 0, 0.2)"
      }}>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="flex justify-center gap-2 mb-7">
            <Tab className="px-6 py-3 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold shadow-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition duration-300 ease-in-out">Salad</Tab>
            <Tab className="px-6 py-3 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold shadow-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition duration-300 ease-in-out">Pizza</Tab>
            <Tab className="px-6 py-3 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold shadow-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition duration-300 ease-in-out">Soup</Tab>
            <Tab className="px-6 py-3 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold shadow-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition duration-300 ease-in-out">Dessert</Tab>
            <Tab className="px-6 py-3 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold shadow-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition duration-300 ease-in-out">Drinks</Tab>
          </TabList>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {salad.length === 0 ? (
                <p className="text-center text-2xl font-bold">No item available</p>
              ) : (
                salad.map((item) => <FoodCard key={item._id} item={item} />)
              )}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pizza.length === 0 ? (
                <p className="text-center text-2xl font-bold">No item available</p>
              ) : (
                pizza.map((item) => <FoodCard key={item._id} item={item} />)
              )}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {soup.length === 0 ? (
                <p className="text-center text-2xl font-bold">No item available</p>
              ) : (
                soup.map((item) => <FoodCard key={item._id} item={item} />)
              )}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dessert.length === 0 ? (
                <p className="text-center text-2xl font-bold">No item available</p>
              ) : (
                dessert.map((item) => <FoodCard key={item._id} item={item} />)
              )}
            </div>
          </TabPanel>
          <TabPanel>
            <p className="text-center text-2xl font-bold">No item available</p>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;