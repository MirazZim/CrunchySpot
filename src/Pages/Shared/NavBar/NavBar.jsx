import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { TiShoppingCart } from "react-icons/ti";
import UseCart from "../../../Hooks/UseCart";
import useAdmin from "../../../Hooks/useAdmin";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();

  const [cart] = UseCart();

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li className="mr-4"><Link to="/">Home</Link></li>
      <li className="mr-4"><Link to="/menu">Menu</Link></li>
      <li className="mr-4"><Link to="/order/salad">Order Food</Link></li>
      <li className="mr-4"><Link to="/contact">Contact Us</Link></li>
      <li className="mr-4"><Link to="/dashboard/cart">
        <TiShoppingCart className="text-2xl" />
        <div className="badge badge-secondary ml-2">{cart.length || 0}</div>
      </Link></li>

      {
        user && isAdmin && <li className="mr-4"><Link to="/dashboard/AdminHome">Admin Home</Link></li>
      }
      {
        user && !isAdmin && <li className="mr-4"><Link to="/dashboard/UserHome">User Home</Link></li>
      }

      {
        user ? <>

          <li className="mr-4"><Link onClick={handleLogOut} to="/login">Logout</Link></li>
        </> : <>
          <li className="mr-4"><Link to="/login">Login</Link></li>
        </>
      }
    </>

  )

  return (
    <>
      <div className="navbar max-w-screen-xl mx-auto fixed z-10 bg-black bg-opacity-30 backdrop-blur-md rounded-xl text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black bg-opacity-30 backdrop-blur-md rounded-xl z-[1] mt-3 w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-2xl">CrunchySpot</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOptions}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
