import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import { Typography ,Box } from "@mui/material";
const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);

    try{
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data);
    }
    catch(error) {
      console.log("Error occured");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect( () => {
    fetchProductData();
  },[])

  return (
    <div>
    {loading ? (
      <Spinner />
    ) : posts.length > 0 ? (
      <>
         <Typography sx={{fontWeight:"700" , fontSize:{sm:"35px" , xs:"25px"} , marginTop:"1em" , marginLeft:{sm:"2em" ,xs:"0.5em"}}}>Recommended For You !!</Typography>
         <Box sx={{display:"flex" , justifyContent:"center" , alignItems:"center" , height:"100%" , minHeight:"100vh" , gap:"2em" , flexWrap:"wrap" , marginTop:"1.2em" }}>
        {posts.map((post) => (
          <Product key={post.id} post={post} />
        ))}
        </Box>
        </>
    ) : (
      <div className="flex justify-center items-center">
        <p>No Data Found</p>
      </div>
    )}
  </div>
  
  );
};

export default Home;
