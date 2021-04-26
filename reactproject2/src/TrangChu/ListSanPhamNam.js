import ListSanPhamMoi from "./ListSanPhamMoi";
import Swiper from 'swiper';
import { useState,useEffect } from 'react';
import { useContext} from 'react';
import {CartContext} from '../Contexts/CartProvider';
function ListSanPhamNam(props){
  const context = useContext(CartContext);
  function addCart(el){
    
    context.addCart(el);

  }
    return (
        <div className="swiper-wrapper">

            {
                props.sanPham.map((e,i)=>{
                    return (
                        <div className="swiper-slide watch-for-man_item" onClick={()=>addCart(e)}>
                        <div className="item_image">
                          <img src="./images/content/index/watch-for-man/product1.jpg" width="100%" alt="" />
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
export default ListSanPhamNam;