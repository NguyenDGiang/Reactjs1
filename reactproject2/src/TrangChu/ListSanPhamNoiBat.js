import ListSanPhamMoi from "./ListSanPhamMoi";
import Swiper from 'swiper';
import { useState,useEffect } from 'react';
import { useContext} from 'react';
import {CartContext} from '../Contexts/CartProvider';
import { useHistory } from "react-router";
function ListSanPhamNoiBat(props){
  const context = useContext(CartContext);
  function addCart(el){
    
    context.addCart(el);

  }
  let history = useHistory();
      function chuyenTrang(p){
        history.push(`/chitietsanpham/${p}`); 
        

      }
    useEffect(() => {
        var swiper4 = new Swiper('.best-equipment_list', {
            slidesPerView: 5,
            spaceBetween: 50,
            slidesPerGroup: 5,
            loop: false,
            loopFillGroupWithBlank: false,
            pagination: {
              el: '.swiper-pagination',
              clickable: false,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
        
        })
    return (
        <div className="swiper-wrapper">
                {
                    props.sanPham.map((e,i)=>{
                        return(
                            <div className="swiper-slide best-equipment_item" onClick={()=>addCart(e)}>
                  <div className="item_image" >
                    <img src={`../images/content/product/list-product/${e.anh}`} width="90%" alt="" />
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
                    <img src="./images/content/index/best-equipment/option.png" alt="" className="item_image_option" />
                  </div>
                  <div className="item_info" onClick={()=>chuyenTrang(e.idSP)}>
                    <p className="item_info_name">{e.tenSP}</p>
                    <p className="item_info_price">{e.gia.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</p>
                  </div>
                </div>
             
                        );
                    })
                }
              </div>
             
                    
    );
}
export default ListSanPhamNoiBat;