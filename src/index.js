import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { Toaster } from "react-hot-toast";
import CartProvider from "./redux/Context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
   <CartProvider>
          <App />   
          <Toaster/>  
          </CartProvider>
    </BrowserRouter>



  
);
