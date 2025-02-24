import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer"; 
import NavBar from "../Pages/Shared/NavBar/NavBar"; 
const Main = () => {
    const location = useLocation();

    // We don't want to show the header and footer on the login and signup pages
    // So we check if the current URL includes 'login' or 'signup'
    // If it does, we set the noHeaderFooter variable to true
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup')

    // Now we use a conditional statement to decide whether or not to render the header and footer
    // If noHeaderFooter is true, we don't render them
    // If it's false, we do render them
    return (
        <div>
            {!noHeaderFooter && <NavBar></NavBar> }
            <Outlet></Outlet>
            {!noHeaderFooter && <Footer></Footer>}
        </div>
    );
};

export default Main;