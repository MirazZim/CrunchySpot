import Cover from "../../Shared/Cover/Cover"
import MenuBackDrop from '../../../assets/menu/banner3.jpg'
import PopularMenu from "../../Home/PopularMenu/PopularMenu"


const Menu = () => {
  return (
    <div>
        <Cover img={MenuBackDrop} title="Our Menu"/>
        <PopularMenu></PopularMenu>   


        <Cover img={MenuBackDrop} title="Our Menu"/>
        <PopularMenu></PopularMenu>   


        <Cover img={MenuBackDrop} title="Our Menu"/>
        <PopularMenu></PopularMenu>    
    </div>
  )
}

export default Menu