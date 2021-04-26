import { useState ,useEffect} from "react/cjs/react.development";
import axios from 'axios';
import { useContext} from 'react';
import {CartContext} from '../Contexts/CartProvider';
function  ListSanPhamTheoHang(props) {
  const context = useContext(CartContext);
  function addCart(el){
    
    context.addCart(el);

  }
    return(
        <div className="list-product-by-brand row">
               {
            props.sanPhamNSX.map((e,i)=>{
                return(
                    <div className="new-product_item " onClick={()=>addCart(e)}> 
                    <div className="item_image">
                      <img src={`../images/content/index/new-product/${e.anh}`} width="90%" alt="" />
                      <div className="item_image_mask">
                        <div className="animation3d">
                          <div>
                            <i className="fas fa-search-plus" />
                          </div>
                          <div>
                            <i className="fas fa-shopping-basket iconcart" />
                          </div>
                        </div>
                      </div>
                      <img src="./images/content/index/new-product/option.png" alt="" className="item_image_option" />
                    </div>
                    <div className="item_info">
                      <p className="item_info_name">{e.tenSP}</p>
                      <p className="item_info_price">{e.gia}</p>
                    </div>
                  </div>
                  
                );
            })
        }

              </div>
            
    );
}

export default ListSanPhamTheoHang;