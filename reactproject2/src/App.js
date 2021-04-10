import logo from './logo.svg';
import './App.css';
import Product from './Product/Product.js';
import './Sass/product.scss';
import './Sass/header.scss';
import './Sass/nav-bar.scss';
import './Css/bootstrap.css';
import './Sass/login.scss';

import Header from './Components/Header';
import NavBar from './Components/NavBar';

import routes from './Components/routes';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react/cjs/react.development';
import {CartProvider} from './Contexts/CartProvider';


function App() {

  const [cart,setCart] = useState([]);




  return (
    <CartProvider>
    <div className="App">
      {/* MASK */}
      <div className="mask"> </div>
        {/* NOTIFICATION SALE */}
        <div className="notification-sale d-flex justify-content-center">
          <span className="text-price">Ngày 12.12 siêu sale</span>&nbsp;
          <span className="text-normal">giao hàng miễn phí cho đơn hàng trên 1 triệu với mã</span>&nbsp;
          <span className="notification-sale_code">Deltafree</span>&nbsp;
          <a href="#" className="notification-sale_link">Chi tiết</a>
        </div>
        <Router>
        {/* HEADER */}
        <Header/>
        {/* NAV BAR */}
        
        <NavBar/>
        
        <Switch>
        {
          routes.map((e,i)=>{
            return(<Route exact={e.exact} path={e.path}>
            {e.main}
        </Route>);
          })
        }
        </Switch>
        </Router>
       
      {/* FOOTER */}
      <div className="footer" style={{backgroundImage: 'url("./images/footer/bg_footer.jpg")'}}>
          <div className="footer_mask" />
          <div className="footer_top container">
            <div className="row">
              <div className="social col-xl-4 col-lg-4 col-sm-12">
                <p className="footer_title">
                  Cộng đồng Smartwatch
                </p>
                <div className="social_list d-flex">
                  <a className="footer_social_icon" href="#" title="Theo dõi trên Twitter">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="footer_social_icon" href="#" title="Theo dõi trên Facebook">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="footer_social_icon" href="#" title="Theo dõi trên Google">
                    <i className="fab fa-google-plus-g" />
                  </a>
                  <a className="footer_social_icon" href="#" title="Theo dõi trên In">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a className="footer_social_icon" href="#" title="Theo dõi trên Youtube">
                    <i className="fab fa-youtube" />
                  </a>
                </div>
              </div>
              <div className="form col-xl-8 col-lg-8 col-sm-12">
                <p className="footer_title">
                  Đăng ký nhận khuyến mãi			
                </p>
                <form className="row">
                  <div>
                    <input type="text" className="form-control" placeholder="Nhập tên của bạn" required />
                    <input type="email" className="form-control" placeholder="Nhập Email" required />
                  </div>
                  <button className="btn btn-default" type="submit">
                    Đăng ký ngay <i className="fas fa-paper-plane" />
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="footer_bottom container">
            <div className="row">
              <div className="footer_bottom_address col-xl-4 col-lg-4 pl-0">
                <h4>Showroom DW Watch</h4>
                <p>Cơ sở I: Ngự Câu, An Thượng Hoài Đức, Hà Nội</p>
                <p>Cơ sở I: Ngự Câu, An Thượng Hoài Đức, Hà Nội</p>
                <p>Cơ sở I: Ngự Câu, An Thượng Hoài Đức, Hà Nội</p>
                <p>Hotline mua hàng: <a href="#">0388287614</a></p>
                <p>Hotline mua hàng: <a href="#">0388287614</a></p>
                <p>Hotline mua hàng: <a href="#">0388287614</a></p>
              </div>
              <div className="col-xl-8 col-lg-8 row footer_bottom_menu pl-0 pr-0">
                <div className="col-xl-4 col-lg-4 col-sm-6">
                  <h4>Chính sách của cửa hàng</h4>
                  <ul>
                    <li><a href="#">Trang chủ</a></li>
                    <li><a href="#">Sản phẩm</a></li>
                    <li><a href="#">SmartWatch</a></li>
                    <li><a href="#">Tin tức</a></li>
                    <li><a href="#">Về chúng tôi</a></li>
                    <li><a href="#">Địa chỉ cửa hàng</a></li>
                  </ul>
                </div>
                <div className="col-xl-4 col-lg-4 col-sm-6">
                  <h4>HỖ TRỢ ONLINE</h4>
                  <ul>
                    <li><a href="#">Trang chủ</a></li>
                    <li><a href="#">Sản phẩm</a></li>
                    <li><a href="#">SmartWatch</a></li>
                    <li><a href="#">Tin tức</a></li>
                    <li><a href="#">Về chúng tôi</a></li>
                    <li><a href="#">Địa chỉ cửa hàng</a></li>
                  </ul>
                </div>
                <div className="col-xl-4 col-lg-4 col-sm-6">
                  <h4>BẢO HÀNH</h4>
                  <ul>
                    <li><a href="#">Trang chủ</a></li>
                    <li><a href="#">Sản phẩm</a></li>
                    <li><a href="#">SmartWatch</a></li>
                    <li><a href="#">Tin tức</a></li>
                    <li><a href="#">Về chúng tôi</a></li>
                    <li><a href="#">Địa chỉ cửa hàng</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_bottom footer_bottom-mobile container">
            <div className="row">
              <div className="col-sm-12 row footer_bottom_menu pl-0 pr-0">
                <div className="col-sm-6 col-12">
                  <h4>Showroom DW Watch</h4>
                  <p>Cơ sở I: Ngự Câu, An Thượng Hoài Đức, Hà Nội</p>
                  <p>Cơ sở I: Ngự Câu, An Thượng Hoài Đức, Hà Nội</p>
                  <p>Cơ sở I: Ngự Câu, An Thượng Hoài Đức, Hà Nội</p>
                  <p>Hotline mua hàng: <a href="#">0388287614</a></p>
                  <p>Hotline mua hàng: <a href="#">0388287614</a></p>
                  <p>Hotline mua hàng: <a href="#">0388287614</a></p>
                </div>
                <div className="col-sm-6 col-12">
                  <h4>Chính sách của cửa hàng</h4>
                  <ul>
                    <li><a href="#">Trang chủ</a></li>
                    <li><a href="#">Sản phẩm</a></li>
                    <li><a href="#">SmartWatch</a></li>
                    <li><a href="#">Tin tức</a></li>
                    <li><a href="#">Về chúng tôi</a></li>
                    <li><a href="#">Địa chỉ cửa hàng</a></li>
                  </ul>
                </div>
                <div className="col-sm-6 col-12">
                  <h4>HỖ TRỢ ONLINE</h4>
                  <ul>
                    <li><a href="#">Trang chủ</a></li>
                    <li><a href="#">Sản phẩm</a></li>
                    <li><a href="#">SmartWatch</a></li>
                    <li><a href="#">Tin tức</a></li>
                    <li><a href="#">Về chúng tôi</a></li>
                    <li><a href="#">Địa chỉ cửa hàng</a></li>
                  </ul>
                </div>
                <div className="col-sm-6 col-12">
                  <h4>BẢO HÀNH</h4>
                  <ul>
                    <li><a href="#">Trang chủ</a></li>
                    <li><a href="#">Sản phẩm</a></li>
                    <li><a href="#">SmartWatch</a></li>
                    <li><a href="#">Tin tức</a></li>
                    <li><a href="#">Về chúng tôi</a></li>
                    <li><a href="#">Địa chỉ cửa hàng</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* COPY RIGHT */}
        <div className="copyright">
          <div className="container">
            <div className="row">
              <span>Bản quyền thuộc về <a href="#">Delta Web</a></span>&nbsp;
              <span>Cung cấp bởi 
                <a href="#" title="Sapo">Sapo</a> 
              </span>
            </div>
          </div>
        </div>
        {/* BACK TO TOP*/}
        <div id="backtotop" onclick="backToTop()">
          <i className="fas fa-angle-up" />
        </div>
    </div>
    </CartProvider>
  );
}

export default App;
