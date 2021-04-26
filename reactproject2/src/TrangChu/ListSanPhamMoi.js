import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import 'swiper/swiper-bundle.css';
import { useState,useEffect } from 'react';
import { useContext} from 'react';
import {CartContext} from '../Contexts/CartProvider';
import { useHistory } from "react-router";
function ListSanPhamMoi(props) {
  const context = useContext(CartContext);
    function addCart(el){
      
      context.addCart(el);

    }
SwiperCore.use([Navigation, Pagination]);
    useEffect(() => {
      const swiper = new Swiper('.new-product_list', {
        
        slidesPerView: 6,
        spaceBetween: 60,
        slidesPerGroup: 60,
        breakpoints: {
          450: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
          768: {
              slidesPerView: 3,
              spaceBetween: 50,
          },
          1024: {
              slidesPerView: 4,
              spaceBetween: 15,
          },
          1200: {
              slidesPerView: 5,
              spaceBetween: 15,
          },
  
          1365: {
              slidesPerView: 6,
              spaceBetween: 15,
          },
      },
        loop: false,
        loopFillGroupWithBlank: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: false,
        },
        navigation: {
          nextEl: '.new-product_slide-next',
          prevEl: '.new-product_slide-prev',
        },
      });
      
      })
      let history = useHistory();
      function chuyenTrang(){
        history.push("/chitietsanpham"); 

      }
 
    return(
      <div className="swiper-container new-product_list">
        <div className="swiper-wrapper">
        {
            props.sanPham.map((e,i)=>{
                return(
                    <div className="swiper-slide new-product_item" onClick={chuyenTrang}>
                  <div className="item_image">
                    <img src={`./images/content/index/new-product/${e.anh}`} width="90%" alt="" />
                    <div className="item_image_mask">
                      <div className="animation3d">
                        <div>
                          <i className="fas fa-search-plus" />
                        </div>
                        <div>
                          <i className="fas fa-shopping-basket iconcart" onClick={()=>addCart(e)}/>
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
        <div className="swiper-button-next new-product_slide-next">
                <img src="./images/content/index/new-product/control_slide.png" alt="" />
              </div>
              <div className="swiper-button-prev new-product_slide-prev">
                <img src="./images/content/index/new-product/control_slide.png" alt="" />
              </div>
        </div>
    );
}

export default ListSanPhamMoi;