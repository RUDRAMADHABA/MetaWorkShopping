import { toast } from "react-hot-toast";
import {  useCartContext } from "../redux/Context/CartContext";
import { Box , Button , Typography , IconButton  , Rating  } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const Product = ({ post }) => {
  const { addCartItem, removeCartItem } = useCartContext()

  const addToCart = () => {
    addCartItem(post);
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    removeCartItem(post.id);
    toast.error("Item removed from Cart");
  };

  return (
        <>
        
            <Box key={post.id} sx={{width:"20em" , height:"auto", minHeight:"430px",display:"flex" , flexDirection:"column", position:"relative"}}>
                  <Box sx={{ minHeight:"250px" , minWidth:"250px" , display:"flex" , justifyContent:"center" , background:"#f6f6f6" , borderRadius:"17px" , alignItems:"center", boxShadow:" inset 20px 20px 39px #d1d1d1, inset -20px -20px 39px #ffffff"}}>
                    <img src={post.image} alt="" style={{width:"200px" , height:"200px" , mixBlendMode:"multiply"}} />
                  </Box>
                  <IconButton sx={{position:"absolute" , transform:"translate(-50% , -50%)" , right:"0" , top:"7%"}}>
                      <FavoriteBorderIcon/>
                  </IconButton>
                   <Box sx={{display:"flex" , flexDirection:"column" , minHeight:"7.5em" , padding:"0.5em 0"}}>
                   <Typography sx={{fontWeight:"700" , fontSize:"14px" , padding:"0 1em"}}>{post.title} </Typography>
                   <Box sx={{display:"flex" , justifyContent:"space-between" , alignItems:"center" , width:"100%" , padding:"0 1em"}}>
                      <Typography sx={{fontWeight:"500" , fontSize:"14px"}}>{post.category}</Typography>
                      <Rating  name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                      </Box>
                      <Typography sx={{fontWeight:"900" , color:"#121212" , padding:"0 1em"}}>&euro; {post.price}</Typography>
                      </Box>
                      <Box sx={{display:"flex",gap:"0.5em" , justifyContent:"center" , alignItems:"center" , width:"100%" }}>
                         <Button variant="contained" onClick={addToCart} sx={{background:"#023c29 !important" , color:"#fff" , borderRadius:"15px" , textTransform:"none" , fontWeight:"700"}}>Add to Cart</Button>
                         <Button variant="outlined" onClick={removeFromCart} sx={{borderColor:"#023c29 !important" , color:"#121212" , borderRadius:"15px" , textTransform:"none" , fontWeight:"700"}}>Remove Item</Button>
                      </Box>
            </Box>
        </>
  );
};

export default Product;
