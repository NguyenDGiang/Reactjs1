import ListSanPhamNu from "./ListSanPhamNu";
import Swiper from 'swiper';
import { useState,useEffect } from 'react';
function SanPhamNu(){
    const [sanPham,setSanPham] = useState([]);
    
    useEffect(() => {
     
        fetch("https://localhost:44318/api/SanPham/GetSPNu")
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
        <div className="watch-for-man">
            <div className="container">
              <div className="row">
                <h2 className="title">
                  <span className="big">Đồng hồ cho nam</span>
                  <span className="mini">
                    Những sản phẩm mới nhất, thông minh nhất đã được Delta Watch cập nhật vào bộ sưu tập
                  </span>
                </h2>
              </div>
              <div className="row mt-5">
                <div className="col-xl-8 col-lg-8 col-sm-7 pl-0 pr-0">
                  <div className="swiper-container watch-for-man_list">
                    <ListSanPhamNu sanPham ={sanPham}/>
                    
                    {/* Add Arrows */}
                    <div className="swiper-button-next watch-for-man_slide-next">
                      <img src="./images/content/index/watch-for-man/control_slide.png" alt="" />
                    </div>
                    <div className="swiper-button-prev watch-for-man_slide-prev">
                      <img src="./images/content/index/watch-for-man/control_slide.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-sm-5 pl-0 pr-0" style={{overflow: 'hidden'}}>
                  <img src="./images/content/index/watch-for-man/bannner_leftnamwatch.jpg" alt="" className="watch-for-man_banner" />
                </div>
              </div>
            </div>
          </div>
          
    );
}
export default SanPhamNu;