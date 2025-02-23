import OrderBanner from "../../../assets/shop/banner2.jpg"
import Cover from "../../Shared/Cover/Cover"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";
import FoodCard from "../../../Components/FoodCard/FoodCard";

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();



    const dessert = menu.filter((item) => item.category === "dessert");
    const salad = menu.filter((item) => item.category === "salad");
    const soup = menu.filter((item) => item.category === "soup");
    const pizza = menu.filter((item) => item.category === "pizza");
    const todaysMenu = menu.filter((item) => item.category === "offered");



    return (
        <div>
            <Cover img={OrderBanner} title="Order Food" />
            <div className="container mx-auto">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {
                                salad.length === 0 ? <p className="text-center text-2xl font-bold">No item available</p> :
                                    salad.map((item) => <FoodCard key={item._id} item={item} />)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {
                                pizza.length === 0 ? <p className="text-center text-2xl font-bold">No item available</p> :
                                    pizza.map((item) => <FoodCard key={item._id} item={item} />)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {
                                soup.length === 0 ? <p className="text-center text-2xl font-bold">No item available</p> :
                                    soup.map((item) => <FoodCard key={item._id} item={item} />)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {
                                dessert.length === 0 ? <p className="text-center text-2xl font-bold">No item available</p> :
                                    dessert.map((item) => <FoodCard key={item._id} item={item} />)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <p className="text-center text-2xl font-bold">No item available</p>
                    </TabPanel>
                </Tabs>
            </div>

        </div>
    )
}

export default Order