import { useState,useEffect } from 'react';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import Pagination from '../Product/Pagination';
import ProductContent from '../Product/ProductContent';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import SanPhamDanhMucContent from './SanPhamDanhMucContent';

function SanPhamDanhMuc(props) {
  
  const [currentPage,setCurrentPage]=useState(1);
  const [postPerPage,setPostPerPage] = useState(5);
  const [activePage,setActivePage] = useState(1);
  let { slug } = useParams();
  
   

  function paginate(value){
    setCurrentPage(value);
    setActivePage(value);
    
  }
  function pageNext(){
    if(currentPage == Math.ceil(props.sanPham.length/postPerPage)){
      setActivePage(1);
     setCurrentPage(1);
    }
    else{
      setActivePage(currentPage+1);
    setCurrentPage(currentPage+1);
    }
    
  }
  function pagePrev(){
    if(currentPage <=1){
      setActivePage(Math.ceil(props.sanPham.length/postPerPage));
      setCurrentPage(Math.ceil(props.sanPham.length/postPerPage));
    }
    else{
      setActivePage(currentPage-1);
    setCurrentPage(currentPage-1);
    }
  }


  


  const indexLast = currentPage*postPerPage;
  const indexFirst = indexLast - postPerPage;
  const currentPost = props.sanPham.slice(indexFirst,indexLast);
  const countPage = Math.ceil(props.sanPham.length/postPerPage);

  return (
    <div>
  
        {/* BREADCRUMB */}
        <div className="breadcrumb">
          <div className="container">
            <div className="row align-items-center">
              <a href="#">Trang chủ</a>
              <i className="fa fa-angle-right ml-3 mr-3" />
              <a href="#">Tất cả sản phẩm</a>
            </div>
          </div>
        </div>
        {/* CONTENT */}
        <div className="content">
          <div className="content_main mt-3">
            <div className="container">
              <div className="row">
                <div className="open-main-left-mobile" style={{display: 'none'}}>
                  <i className="fa fa-align-right" />
                </div>
                <div className="content_main-left col-xl-3 col-lg-3 col-sm-4">
                  <div className="list-category">
                    <div className="title">
                      Danh mục sản phẩm
                    </div>
                    <ul className>
                      <li className="menu-item">
                        <a href="#">Trang chủ</a>
                      </li>
                      <li className="menu-item has-drop-menu">
                        <a href="#">Sản phẩm</a>
                        <i className="fa fa-plus btn-show-drop-menu" />
                        <i className="fa fa-minus btn-close-drop-menu" />
                        <ul className="drop-menu menu-drop-1">
                          <li className="menu-item has-drop-menu">
                            <i className="fa fa-angle-right" />
                            <a href="#">Trang chủ</a>
                            <i className="fa fa-plus btn-show-drop-menu" />
                            <i className="fa fa-minus btn-close-drop-menu" />
                            <ul className="drop-menu menu-drop-2">
                              <li className="menu-item">
                                <i className="fa fa-angle-right" />
                                <a href="#">Trang chủ</a>
                              </li>
                              <li className="menu-item">
                                <i className="fa fa-angle-right" />
                                <a href="#">Trang chur</a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item">
                            <i className="fa fa-angle-right" />
                            <a href="#">Trang chur</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item has-drop-menu">
                        <a href="#">SmartWatch</a>
                        <i className="fa fa-plus btn-show-drop-menu" />
                        <i className="fa fa-minus btn-close-drop-menu" />
                        <ul className="drop-menu menu-drop-1">
                          <li className="menu-item has-drop-menu">
                            <i className="fa fa-angle-right" />
                            <a href="#">Trang chủ</a>
                            <i className="fa fa-plus btn-show-drop-menu" />
                            <i className="fa fa-minus btn-close-drop-menu" />
                            <ul className="drop-menu menu-drop-2">
                              <li className="menu-item">
                                <i className="fa fa-angle-right" />
                                <a href="#">Trang chủ</a>
                              </li>
                              <li className="menu-item">
                                <i className="fa fa-angle-right" />
                                <a href="#">Trang chur</a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item">
                            <i className="fa fa-angle-right" />
                            <a href="#">Trang chur</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item">
                        <a href="#">Tin tức</a>
                      </li>
                      <li className="menu-item">
                        <a href="#">Về chúng tôi</a>
                      </li>
                      <li className="menu-item">
                        <a href="#">Địa chỉ cửa hàng</a>
                      </li>
                    </ul>
                  </div>
                  <div className="filter-brand">
                    <div className="title">
                      Thương hiệu
                    </div>
                    <ul>
                      <li>
                        <input type="checkbox" name id="brandSamsung" />
                        <div className="fake-checkbox" />
                        <label htmlFor="brandSamsung">
                          Brand Samsung
                        </label>
                      </li>
                      <li>
                        <input type="checkbox" name id="brandSamsung" />
                        <div className="fake-checkbox" />
                        <label htmlFor="brandSamsung">
                          Brand Samsung
                        </label>
                      </li>
                      <li>
                        <input type="checkbox" name id="brandSamsung" />
                        <div className="fake-checkbox" />
                        <label htmlFor="brandSamsung">
                          Brand Samsung
                        </label>
                      </li>
                      <li>
                        <input type="checkbox" name id="brandSamsung" />
                        <div className="fake-checkbox" />
                        <label htmlFor="brandSamsung">
                          Brand Samsung
                        </label>
                      </li>
                      <li>
                        <input type="checkbox" name id="brandSamsung" />
                        <div className="fake-checkbox" />
                        <label htmlFor="brandSamsung">
                          Brand Samsung
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div className="filter-shape">
                    <div className="title">
                      Kiểu dáng
                    </div>
                    <ul>
                      <li>
                        <input type="checkbox" name id="shapeSmart" />
                        <div className="fake-checkbox" />
                        <label htmlFor="shapeSmart">
                          Smart Watch
                        </label>
                      </li>
                    </ul></div>
                  <div className="filter-color">
                    <div className="title">
                      Màu sắc
                    </div>
                    <ul>
                      <li>
                        <div className="filter-color-yeallow" style={{backgroundColor: '#F1C40F'}} />
                      </li>
                      <li>
                        <div className="filter-color-purple" style={{backgroundColor: '#9B59B6'}} />
                      </li>
                      <li>
                        <div className="filter-color-red" style={{backgroundColor: '#E74C3C'}} />
                      </li>
                      <li>
                        <div className="filter-color-green" style={{backgroundColor: '#2ECC71'}} />
                      </li>
                      <li>
                        <div className="filter-color-pink" style={{backgroundColor: '#FF00CC'}} />
                      </li>
                      <li>
                        <div className="filter-color-orange" style={{backgroundColor: '#E67E22'}} />
                      </li>
                    </ul>
                  </div>
                  <div className="filter-size">
                    <div className="title">
                      Kích thước
                    </div>
                    <ul>
                      <li>
                        <input type="checkbox" name id="size30mm" />
                        <div className="fake-checkbox" />
                        <label htmlFor="size30mm">
                          30mm
                        </label>
                      </li>
                      <li>
                        <input type="checkbox" name id="size30mm" />
                        <div className="fake-checkbox" />
                        <label htmlFor="size30mm">
                          30mm
                        </label>
                      </li>
                      <li>
                        <input type="checkbox" name id="size32mm" />
                        <div className="fake-checkbox" />
                        <label htmlFor="size32mm">
                          32mm
                        </label>
                      </li>
                      <li>
                        <input type="checkbox" name id="size34mm" />
                        <div className="fake-checkbox" />
                        <label htmlFor="size34mm">
                          34mm
                        </label>
                      </li>
                      <li>
                        <input type="checkbox" name id="size36mm" />
                        <div className="fake-checkbox" />
                        <label htmlFor="size36mm">
                          36mm
                        </label>
                      </li>
                      <li>
                        <input type="checkbox" name id="size38mm" />
                        <div className="fake-checkbox" />
                        <label htmlFor="size38mm">
                          38mm
                        </label>
                      </li>
                      <li>
                        <input type="checkbox" name id="size40mm" />
                        <div className="fake-checkbox" />
                        <label htmlFor="size40mm">
                          40mm
                        </label>
                      </li>
                      <li>
                        <input type="checkbox" name id="size42mm" />
                        <div className="fake-checkbox" />
                        <label htmlFor="size42mm">
                          42mm
                        </label>
                      </li>
                      <li>
                        <input type="checkbox" name id="size44mm" />
                        <div className="fake-checkbox" />
                        <label htmlFor="size44mm">
                          44mm
                        </label>
                      </li>
                      <li>
                        <input type="checkbox" name id="size46mm" />
                        <div className="fake-checkbox" />
                        <label htmlFor="size46mm">
                          46mm
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div className="filter-price">
                    <div className="title">
                      Giá sản phẩm
                    </div>
                    <ul>
                      <li>
                        <input type="checkbox" name id="priceUnder100" />
                        <div className="fake-checkbox" />
                        <label htmlFor="priceUnder100">
                          Giá dưới 100.000
                        </label>
                      </li>
                      <li>
                        <input type="checkbox" name id="priceUnder200" />
                        <div className="fake-checkbox" />
                        <label htmlFor="priceUnder200">
                          100.000 - 200.000 
                        </label>
                      </li>
                      <li>
                        <input type="checkbox" name id="priceUnder300" />
                        <div className="fake-checkbox" />
                        <label htmlFor="priceUnder300">
                          200.000 - 300.000
                        </label>
                      </li>
                      <li>
                        <input type="checkbox" name id="priceUnder500" />
                        <div className="fake-checkbox" />
                        <label htmlFor="priceUnder500">
                          300.000 - 500.000
                        </label>
                      </li>
                      <li>
                        <input type="checkbox" name id="priceUnder1m" />
                        <div className="fake-checkbox" />
                        <label htmlFor="priceUnder1m">
                          500.000 - 1.000.000
                        </label>
                      </li>
                      <li>
                        <input type="checkbox" name id="priceOver1m" />
                        <div className="fake-checkbox" />
                        <label htmlFor="priceOver1m">
                          Giá trên 1.000.000
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* product content*/}
                <SanPhamDanhMucContent sanPham = {currentPost}/>
                <Pagination countPage={countPage} paginate={paginate} activePage={activePage} currentPage={currentPage} pageNext={pageNext} pagePrev={pagePrev}/>
                <div className="ads-last mt-5" style={{display: 'none'}}>
                  <div className="col-sm-6 pl-0">
                    <img src="./images/content/product/ads/banner1.jpg" alt="" width="100%" />
                  </div>
                  <div className="col-sm-6 pr-0">
                    <img src="./images/content/product/ads/banner2.jpg" alt="" width="100%" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SanPhamDanhMuc;
