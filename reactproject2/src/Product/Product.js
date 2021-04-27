import { useState,useEffect } from 'react';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import Pagination from './Pagination';
import ProductContent from './ProductContent';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function Product(props) {
  const [sanPham,setSanPham] = useState([]);
  const [currentPage,setCurrentPage]=useState(1);
  const [postPerPage,setPostPerPage] = useState(5);
  const [activePage,setActivePage] = useState(1);
  let { slug } = useParams();
  console.log(slug);
  useEffect(() => {
    fetch("https://localhost:44318/api/SanPham/GetAll")
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
  }, [])

  //console.log(sanPham);
  function paginate(value){
    setCurrentPage(value);
    setActivePage(value);
    
  }
  function pageNext(){
    if(currentPage == Math.ceil(sanPham.length/postPerPage)){
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
      setActivePage(Math.ceil(sanPham.length/postPerPage));
      setCurrentPage(Math.ceil(sanPham.length/postPerPage));
    }
    else{
      setActivePage(currentPage-1);
    setCurrentPage(currentPage-1);
    }
  }

  function sapXep(){
   
  }


  


  const indexLast = currentPage*postPerPage;
  const indexFirst = indexLast - postPerPage;
  const currentPost = sanPham.slice(indexFirst,indexLast);
  const countPage = Math.ceil(sanPham.length/postPerPage);

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
                      <Link to="/">Trang chủ</Link>
                      </li>
                      <li className="menu-item has-drop-menu">
                        <a href="#">Sản phẩm</a>
                        <i className="fa fa-plus btn-show-drop-menu" />
                        <i className="fa fa-minus btn-close-drop-menu" />
                        <ul className="drop-menu menu-drop-1">
                          <li className="menu-item has-drop-menu">
                            <i className="fa fa-angle-right" />
                            <Link to="/">Trang chủ</Link>
                            <i className="fa fa-plus btn-show-drop-menu" />
                            <i className="fa fa-minus btn-close-drop-menu" />
                            <ul className="drop-menu menu-drop-2">
                              <li className="menu-item">
                                <i className="fa fa-angle-right" />
                                <Link to="/">Trang chủ</Link>
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
                  
                </div>
                {/* product content*/}
                <ProductContent sanPham = {currentPost}/>
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

export default Product;
