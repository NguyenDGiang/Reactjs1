
import Swiper from 'swiper';
import { useState,useEffect } from 'react';
import ListSanPhamNoiBat from './ListSanPhamNoiBat';
function SanPhamNoiBat(){
    const [sanPham,setSanPham] = useState([]);
    
    useEffect(() => {
     
        fetch("https://localhost:44318/api/SanPham/GetSPNoiBat")
          .then(res => res.json())
          .then(
            (result) => {
              setSanPham(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              
            }
          )
      }, []);
    return(
        <div className="best-equipment">
        <div className="container">
          <div className="row">
            <h2 className="title">
              <span className="big">Phụ kiện nổi bật</span>
              <span className="mini">
                Những sản phẩm mới nhất, thông minh nhất đã được Delta Watch cập nhật vào bộ sưu tập
              </span>
            </h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="swiper-container best-equipment_list">
              <ListSanPhamNoiBat sanPham ={sanPham}/>
             
              {/* Add Arrows */}
              <div className="swiper-button-next best-equipment_slide-next">
                <img src="./images/content/index/best-equipment/control_slide.png" alt="" />
              </div>
              <div className="swiper-button-prev best-equipment_slide-prev">
                <img src="./images/content/index/best-equipment/control_slide.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
}
export default SanPhamNoiBat;