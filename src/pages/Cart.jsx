import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {  useCartContext } from "../redux/Context/CartContext";
import { Paper, Typography, Button , Box ,Rating, Fab} from "@mui/material";
import carting from '../components/Images/pngwing.com.png'
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from "react-hot-toast";
const Cart = () => {
  console.log("Printing Cart");
  const [totalAmount, setTotalAmount] = useState(0);
  const { removeCartItem , cart } = useCartContext();
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

   const removeFromCart = (item) => {
    removeCartItem(item.id);
    toast.success("Item Removed");
   };

  return (
    <div style={{ display: "flex",minHeight:"100vh",height:"100%" , padding:"0em 2em", alignItems:"center" , justifyContent:"center"}}>
      
        {cart.length > 0 ? (
          <>
  <Box  sx={{display:"flex" , alignItems:"center", width:"100%" , justifyContent:"center" , flexDirection:"column" , padding:"1em 0" , gap:{lg:"0em" , xs:"1.2em"}}}> 
            {cart.map((item, index) => (
                 <Box key={item.id} sx={{ display:"flex" , justifyContent:"center" , alignItems:"center" , padding:{sm:"1em 1em"  ,xs:"1em 0.5em"} , width:"100%" , flexDirection:{lg:"row" , xs:"column"} , gap:{lg:"0em" , xs:"1em"}}} >
                   <Box sx={{width:{lg:"50%" , xs:"100%"} , background:"#f6f6f6" , display:"flex" , justifyContent:"center" , alignItems:"center" , padding:{sm:"1em 1em" , xs:"0.5em 0.5em"} , borderRadius:"17px", boxShadow:" inset 20px 20px 39px #d1d1d1, inset -20px -20px 39px #ffffff"}}>
                  <img src={item.image} alt="" width={300} style={{mixBlendMode:"multiply"}} />
                  </Box>
                  <Box sx={{display:"flex" , flexDirection:"column" ,width:{lg:"50%" , xs:"100%"} , padding:{sm:"0em 1.5em" , xs:"0em 0.5em"} ,gap:"0.5em"}}>
             <Typography sx={{fontSize:{sm:"28px" , xs:"25px"} , fontWeight:"700" , color:"#121212"}}>{item.title}</Typography>
             <Typography sx={{fontSize:{sm:"17px" , xs:"15px"} ,fontWeight:"500" }}>{item.description}</Typography>
             <Rating  name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
             <Box sx={{width:"100%" , display:"flex" , justifyContent:"space-between" , alignItems:"center" , flexDirection:{sm:"row" , xs:'column'}}}>
              <Box>
             <Typography sx={{marginTop:"1em", fontWeight:"700" , fontSize:{sm:"25px" , xs:"20px"}}}> &euro; {item.price}</Typography>
             <Typography sx={{position:"relative" , bottom:"0.7em" , fontSize:{sm:"15px" , xs:"13px"} , fontWeight:"500"}}>Suggested payments with 6 months special financing.</Typography>
             </Box>
             <Fab onClick={()=> removeFromCart(item)} sx={{alignSelf:{sm:"initial" , xs:"flex-end"}}}><DeleteIcon/></Fab>
             </Box>
              </Box>
              </Box>
         ))}
         <Box sx={{display:"flex" , alignSelf:{sm:"flex-end" , xs:"center"} , alignItems:"center" , gap:{sm:"1.2em" , xs:"0em"}}}>
          <Typography sx={{fontWeight:"700" , fontSize:"22px"}}>Total Amount: ${totalAmount}</Typography>
             <Button  variant="contained" sx={{background:"#023c29 !important" , color:"#fff" , borderRadius:"15px" , textTransform:"none" , fontWeight:"700" , fontSize:{sm:"18px" , xs:"15px"} , width:{sm:"auto"  , xs:"15em"}}}>Checkout Now</Button>
         </Box>
         </Box>
          </>
        ) : (
          <Paper elevation={1} sx={{background:"#f6f6f6" , width:{sm:"22em" , xs:"auto"} , padding:"1.5em 1.5em"}}>
          <div style={{display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center" , gap:"1em"}}>
            <img src={carting} alt="" width={300} />
            <Typography sx={{color:"#121212" , fontWeight:"700" , fontSize:"19px"}}>Cart Empty</Typography>
            <Typography  sx={{color:"#121212" , fontWeight:"500" , fontSize:"16px" , width:"17em" , textAlign:"center"}}>Look like you haven't added anything in your cart!!!</Typography>
            <Link to={"/"}>
              <Button variant="contained" sx={{background:"#023c29 !important" , color:"#fff" , fontWeight:"700" , textTransform:"none"}}>Shop Now</Button>
            </Link>
          </div>
          </Paper>
        )}
    </div>
  );
};

export default Cart;
