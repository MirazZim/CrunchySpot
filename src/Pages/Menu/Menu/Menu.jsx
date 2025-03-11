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
    <div className="space-y-12 p-6 bg-gray-50">

      {/* Main Cover */}
      <Cover img={MenuBackDrop} title="Our Menu" />

      {/* Today's Special */}
      <SectionTitle heading="Today's Special" subHeading="Don't miss" />
      <MenuCategory items={todaysMenu} />

      {/* Dessert Menu */}
      <div className="relative rounded-xl overflow-hidden shadow-lg">
        <img src={DessertBackDrop} 
          className="w-full h-[250px] md:h-[400px] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/20 flex items-center justify-center">
          <h2 className="text-white text-3xl md:text-5xl font-bold uppercase">Desserts</h2>
        </div>
      </div>
      <MenuCategory items={dessert} />

      {/* Salad Menu */}
      <div className="relative rounded-xl overflow-hidden shadow-lg">
        <img src={saladBackDrop} alt="Salad"
          className="w-full h-[250px] md:h-[400px] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/20 flex items-center justify-center">
          <h2 className="text-white text-3xl md:text-5xl font-bold uppercase">Salad</h2>
        </div>
      </div>
      <MenuCategory items={salad} />

      {/* Soup Menu */}
      <div className="relative rounded-xl overflow-hidden shadow-lg">
        <img src={soupBackDrop} alt="Soup"
          className="w-full h-[250px] md:h-[400px] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/20 flex items-center justify-center">
          <h2 className="text-white text-3xl md:text-5xl font-bold uppercase">Soup</h2>
        </div>
      </div>
      <MenuCategory items={soup} />

      {/* Pizza Menu */}
      <div className="relative rounded-xl overflow-hidden shadow-lg">
        <img src={pizzaBackDrop} alt="Pizza"
          className="w-full h-[250px] md:h-[400px] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/20 flex items-center justify-center">
          <h2 className="text-white text-3xl md:text-5xl font-bold uppercase">Pizza</h2>
        </div>
      </div>
      <MenuCategory items={pizza} />

    </div>
  )
}

export default Menu;
