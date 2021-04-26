import React from "react";
import { useState } from "react/cjs/react.development";

export const CartContext = React.createContext();

export const CartProvider=(props)=>{
    const [cart,setCart]= useState(
        [
        ] 
    );
    const [tongTien,setTongtien] = useState(0);
    function addCart(el){
        
       var exist = cart.find((x)=>x.idSP===el.idSP);
       if(exist){
           setCart(cart.map(e=>e.idSP===el.idSP?{...exist,quality:exist.quality + 1}:e));
       }
       else{
           setCart([...cart,{...el,quality:1}])
       }  
    }

    const [sanPham,setSanPham] = useState([]);

    function  addQuality(params) {
        var exist = cart.find((x)=>x.idSP===params.idSP);
        if(exist){
            setCart(cart.map(e=>e.idSP===params.idSP?{...exist,quality:exist.quality + 1,giaQuality:e.gia + e.giaQuality}:e));
        
        }
        
    }

    function  addGiamQuality(params) {
       
        var exist = cart.find((x)=>x.idSP===params.idSP);
        if(exist){
            setCart(cart.map(e=>e.idSP===params.idSP?{...exist,quality:exist.quality<=1?1:exist.quality - 1,giaQuality:e.gia + e.giaQuality}:e));
        
        }
    }

    function  deleteCart(params) {
       
        const result = cart.filter(word => word.idSP !== params.idSP);
        console.log(result);
        setCart(result);
        
    }

    

    
    

    return(
        <CartContext.Provider value= {{cart,addCart,tongTien,sanPham,addQuality,addGiamQuality,deleteCart}}>
            {props.children}
        </CartContext.Provider>

    );
}