import React from "react";
import { useState } from "react/cjs/react.development";
import { useEffect } from 'react';
export const CartContext = React.createContext();

export const CartProvider=(props)=>{
    const [listSanPham,setListSanPham]=useState([]);
    const [spNoiBat,setSpNoiBat]=useState([]);
    useEffect(() => {
        fetch("https://localhost:44318/api/SanPham/GetDanhMucSP")
          .then(res => res.json())
          .then(
            (result) => {
              setListSanPham(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              
            }
          )

          fetch("https://localhost:44318/api/SanPham/GetSPNoiBat")
          .then(res => res.json())
          .then(
            (result) => {
              setSpNoiBat(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              
            }
          )
      }, [])
    const [cart,setCart]= useState(
        [
        ] 
    );
    const [tongTien,setTongtien] = useState(0);
    function addCart(el){
        
       var exist = cart.find((x)=>x.idSP===el.idSP);
       if(exist){
           setCart(cart.map(
               e=>e.idSP===el.idSP?{...exist,quality:exist.quality + 1}:e)
               );
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

    

    console.log(listSanPham);
    

    return(
        <CartContext.Provider value= {{spNoiBat,cart,addCart,tongTien,sanPham,addQuality,addGiamQuality,deleteCart,listSanPham}}>
            {props.children}
        </CartContext.Provider>

    );
}