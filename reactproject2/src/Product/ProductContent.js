import { useContext} from 'react';
import React from "react";
import { useHistory } from "react-router";
import {CartContext} from '../Contexts/CartProvider';
import { useState,useEffect } from 'react';
function ProductContent(props){
    const context = useContext(CartContext);
  
    
    function addCart(el){
      
      context.addCart(el);

    }
    let history = useHistory();
      function chuyenTrang(p){
        history.push(`/chitietsanpham/${p}`); 
      }
      
    
    return(
      
      
        <div className="content_main-right col-xl-9 col-lg-9">
                            <div className="ads row mb-3">
                    <div className="col-xl-6 col-lg-6 col-sm-6">
                      <img src="./images/content/product/ads/banner1.jpg" alt="" width="100%" />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-sm-6">
                      <img src="./images/content/product/ads/banner2.jpg" alt="" width="100%" />
                    </div>
                  </div>
                  <div className="sort row justify-content-between">
                    <div className="col-xl-8 col-lg-8 col-sm-8 col-12">
                      <h4 style={{fontWeight: 'normal'}}>Tất cả sản phẩm</h4>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-sm-4 col-12">
                      <div className="d-flex justify-content-end align-items-baseline">
                        <p>Sắp xếp:</p>
                        <div className="current-sort-option">
                          Thứ tự
                          <i className="fa fa-angle-down ml-2" />
                          <ul>
                            <li>
                              <input type="radio" name="sort-option" id="sort-default" />
                              <label htmlFor="sort-default">Mặc định</label>
                            </li>
                            <li>
                              <input type="radio" name="sort-option" id="sort-AZ" />
                              <label htmlFor="sort-AZ">A → Z</label>
                            </li>
                            <li>
                              <input type="radio" name="sort-option" id="sort-ZA" />
                              <label htmlFor="sort-ZA">Z → A</label>
                            </li>
                            <li>
                              <input type="radio" name="sort-option" id="sort-priceUp" />
                              <label htmlFor="sort-priceUp">Giá tăng dần</label>
                            </li>
                            <li>
                              <input type="radio" name="sort-option" id="sort-priceDown" />
                              <label htmlFor="sort-priceDown">Giá giảm dần</label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list-product">
                    {props.sanPham.map((value,i)=>{
                        return (
                            <div className="product_item">
                                <div className="item_image">
                                    <img src={`./images/content/product/list-product/${value.anh}`} width="90%" alt="" />
                                    <div className="item_image_mask">
                                    <div className="animation3d">
                                        <div>
                                        <i className="fas fa-search-plus" />
                                        </div>
                                        <div onClick={()=>addCart(value)}>
                                        <i className="fas fa-shopping-basket iconcart" />
                                        </div>
                                    </div>
                                    </div>
                                    <img src="./images/content/product/list-product/option.png" alt="" className="item_image_option" />
                                </div>
                                <div className="item_info"onClick={()=>chuyenTrang(value.idSP)}>
                                    <p className="item_info_name">{value.tenSP}</p>
                                    <p className="item_info_price">{value.gia.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</p>
                                </div>
                            </div>
                  
                        );
                    })}
                  </div>
                </div>
                
                
    );
}

export default ProductContent;