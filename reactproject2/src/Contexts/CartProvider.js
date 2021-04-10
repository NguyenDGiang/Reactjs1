import React from "react";
import { useState } from "react/cjs/react.development";

export const CartContext = React.createContext();

export const CartProvider=(props)=>{
    const [cart,setCart]= useState(
        [
            {
                id:1,
                ten:"sdfd"
            }
        ]
    );
    return(
        <CartContext.Provider value= {{cart}}>
            {props.children}
        </CartContext.Provider>

    );
}