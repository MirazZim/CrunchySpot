import Cover from "../../Shared/Cover/Cover"
import MenuBackDrop from '../../../assets/menu/banner3.jpg'
import PopularMenu from "../../Home/PopularMenu/PopularMenu"
import MenuCategory from "../MenuCategory/MenuCategory"

const Menu = () => {
  return (
    <div>
        <Cover img={MenuBackDrop} title="Our Menu"/>
        <PopularMenu></PopularMenu>   
        <MenuCategory></MenuCategory>
    </div>
  )
}

export default Menu