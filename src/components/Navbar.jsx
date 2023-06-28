import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {  useCartContext } from "../redux/Context/CartContext";
import logo from './Images/8093572-removebg-preview.png'
import { IconButton, Typography } from "@mui/material";
const Navbar = () => {
  const { cart } = useCartContext()
  return (
    <div className="navbar-container dark-bg">
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-5" style={{display:"flex" , alignItems:"center"}}>
            <img src={logo} className="h-14" alt="Logo" />
            <Typography sx={{fontSize:"19px" , fontWeight:"700"  , position:"relative" , right:"1.2em" , color:"#121212"}}>MetaWork</Typography>
          </div>
        </NavLink>

        <div className="flex items-center font-medium text-black-100 mr-5 space-x-6">
          <NavLink to="/">
            <Typography sx={{fontWeight:"700" , fontSize:"18px"}}>Home</Typography>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative">
              <IconButton>
              <FaShoppingCart className="text-2xl"style={{color:"#000"}} />
              </IconButton>
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-green-700 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
