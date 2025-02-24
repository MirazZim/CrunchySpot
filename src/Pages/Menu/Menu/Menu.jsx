import Cover from "../../Shared/Cover/Cover"
import MenuBackDrop from '../../../assets/menu/banner3.jpg'
import DessertBackDrop from '../../../assets/menu/dessert-bg.jpeg'
import saladBackDrop from '../../../assets/menu/salad-bg.jpg'
import soupBackDrop from '../../../assets/menu/soup-bg.jpg'
import pizzaBackDrop from '../../../assets/menu/pizza-bg.jpg'
import useMenu from "../../../Hooks/useMenu"
import SectionTitle from "../../../Components/SectionTitle/SectionTitle"
import MenuCategory from "../MenuCategory/MenuCategory"

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const todaysMenu = menu.filter((item) => item.category === "offered");

  return (
    <div>
        <Cover img={MenuBackDrop} title="Our Menu"/>
        <SectionTitle heading="Today's Special" subHeading="Don't miss" /> 
        <MenuCategory items={todaysMenu}/> 

        {/* Dessert Menu Item */}
        <SectionTitle heading="Desserts" subHeading="Please Check" />
        <MenuCategory title="desserts" message="Please Check Our Dessert Menu" coverImg={DessertBackDrop} items={dessert}/>

        {/* Salad Menu Item */}
        <SectionTitle heading="Salad" subHeading="Please Check" />
        <MenuCategory title="salad" message="Please Check Our Salad Menu" coverImg={saladBackDrop} items={salad}/>  

        {/* Soup Menu Item */}  
        <SectionTitle heading="Soup" subHeading="Please Check" />
        <MenuCategory title="soup" message="Please Check Our Soup Menu" coverImg={soupBackDrop} items={soup}/>

        {/* Pizza Menu Item */}  
        <SectionTitle heading="Pizza" subHeading="Please Check" />
        <MenuCategory title="pizza" message="Please Check Our Pizza Menu" coverImg={pizzaBackDrop} items={pizza}/>

        {/*  */}  

    </div>
  )
}

export default Menu;