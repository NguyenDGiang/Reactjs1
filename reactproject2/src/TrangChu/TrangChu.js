import '../Sass/index.scss';
import '../Css/bootstrap.css';
import { Swiper, SwiperSlide } from 'swiper/react';
function TrangChu(){
    return (
        <div>
        <div className="banner">
          <a href="#">
            <img src="./images/banner/slider_2 .jpg" alt="" width="100%" />
          </a>
        </div>
        {/* CONTENT */}
        <div className="content">
          <div className="best-brand">
            <div className="container">
              <div className="row">
                <h2 className="title">
                  <span className="big">Thương hiệu nổi bật</span>
                  <span className="mini">
                    Bộ sưu tập những thương hiệu nổi tiếng về smartwatch trên thế giới
                  </span>
                </h2>
                <div className="list-brand">
                  <div className="item-brand">
                    <img src="./images/content/index/best-product/brand1.jpg" alt="" width="100%" />
                  </div>
                  <div className="item-brand">
                    <img src="./images/content/index/best-product/brand1.jpg" alt="" width="100%" />
                  </div>
                  <div className="item-brand">
                    <img src="./images/content/index/best-product/brand1.jpg" alt="" width="100%" />
                  </div>
                  <div className="item-brand">
                    <img src="./images/content/index/best-product/brand1.jpg" alt="" width="100%" />
                  </div>
                  <div className="item-brand">
                    <img src="./images/content/index/best-product/brand1.jpg" alt="" width="100%" />
                  </div>
                  <div className="item-brand">
                    <img src="./images/content/index/best-product/brand1.jpg" alt="" width="100%" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="new-product">
            <div className="container">
              <div className="row">
                <h2 className="title">
                  <span className="big">Hàng mới về</span>
                  <span className="mini">
                    Những sản phẩm mới nhất, thông minh nhất đã được Delta Watch cập nhật vào bộ sưu tập
                  </span>
                </h2>
              </div>
            </div>
            <div className="swiper-container new-product_list">
              <div className="swiper-wrapper">
                <div className="swiper-slide new-product_item">
                  <div className="item_image">
                    <img src="./images/content/index/new-product/product1.jpg" width="90%" alt="" />
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
                    <p className="item_info_name">Ten san pham</p>
                    <p className="item_info_price">1.000.000₫</p>
                  </div>
                </div>
                <div className="swiper-slide new-product_item">
                  <div className="item_image">
                    <img src="./images/content/index/new-product/product1.jpg" width="90%" alt="" />
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
                    <p className="item_info_name">Ten san pham</p>
                    <p className="item_info_price">1.000.000₫</p>
                  </div>
                </div>
                <div className="swiper-slide new-product_item">
                  <div className="item_image">
                    <img src="./images/content/index/new-product/product1.jpg" width="90%" alt="" />
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
                    <p className="item_info_name">Ten san pham</p>
                    <p className="item_info_price">1.000.000₫</p>
                  </div>
                </div>
                <div className="swiper-slide new-product_item">
                  <div className="item_image">
                    <img src="./images/content/index/new-product/product1.jpg" width="90%" alt="" />
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
                    <p className="item_info_name">Ten san pham</p>
                    <p className="item_info_price">1.000.000₫</p>
                  </div>
                </div>
                <div className="swiper-slide new-product_item">
                  <div className="item_image">
                    <img src="./images/content/index/new-product/product1.jpg" width="90%" alt="" />
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
                    <p className="item_info_name">Ten san pham</p>
                    <p className="item_info_price">1.000.000₫</p>
                  </div>
                </div>
                <div className="swiper-slide new-product_item">
                  <div className="item_image">
                    <img src="./images/content/index/new-product/product1.jpg" width="90%" alt="" />
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
                    <p className="item_info_name">Ten san pham</p>
                    <p className="item_info_price">1.000.000₫</p>
                  </div>
                </div>
                <div className="swiper-slide new-product_item">
                  <div className="item_image">
                    <img src="./images/content/index/new-product/product1.jpg" width="90%" alt="" />
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
                    <p className="item_info_name">Ten san pham</p>
                    <p className="item_info_price">1.000.000₫</p>
                  </div>
                </div>
                <div className="swiper-slide new-product_item">
                  <div className="item_image">
                    <img src="./images/content/index/new-product/product1.jpg" width="90%" alt="" />
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
                    <p className="item_info_name">Ten san pham</p>
                    <p className="item_info_price">1.000.000₫</p>
                  </div>
                </div>
                <div className="swiper-slide new-product_item">
                  <div className="item_image">
                    <img src="./images/content/index/new-product/product1.jpg" width="90%" alt="" />
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
                    <p className="item_info_name">Ten san pham</p>
                    <p className="item_info_price">1.000.000₫</p>
                  </div>
                </div>
                <div className="swiper-slide new-product_item">
                  <div className="item_image">
                    <img src="./images/content/index/new-product/product1.jpg" width="90%" alt="" />
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
                    <p className="item_info_name">Ten san pham</p>
                    <p className="item_info_price">1.000.000₫</p>
                  </div>
                </div>
              </div>
              {/* Add Arrows */}
              <div className="swiper-button-next new-product_slide-next">
                <img src="./images/content/index/new-product/control_slide.png" alt="" />
              </div>
              <div className="swiper-button-prev new-product_slide-prev">
                <img src="./images/content/index/new-product/control_slide.png" alt="" />
              </div>
            </div>
          </div>
          <div className="product-by-brand">
            <div className="container">
              <div className="row">
                <h2 className="title">
                  <span className="big">Sản phẩm theo hãng</span>
                  <span className="mini">
                    Những sản phẩm mới nhất, thông minh nhất đã được Delta Watch cập nhật vào bộ sưu tập
                  </span>
                </h2>
              </div>
              <div className="list-brand row">
                <div className="brand_item">
                  <div className="brand_item_image">
                    <img src="./images/content/index/product-by-brand/brand1.png" alt="" className="animation3d" />
                  </div>
                  <div className="brand_item_name">
                    <p>Apple Watch</p>
                  </div>
                </div>
                <div className="brand_item">
                  <div className="brand_item_image">
                    <img src="./images/content/index/product-by-brand/brand1.png" alt="" className="animation3d" />
                  </div>
                  <div className="brand_item_name">
                    <p>Apple Watch</p>
                  </div>
                </div>
                <div className="brand_item">
                  <div className="brand_item_image">
                    <img src="./images/content/index/product-by-brand/brand1.png" alt="" className="animation3d" />
                  </div>
                  <div className="brand_item_name">
                    <p>Apple Watch</p>
                  </div>
                </div>
                <div className="brand_item">
                  <div className="brand_item_image">
                    <img src="./images/content/index/product-by-brand/brand1.png" alt="" className="animation3d" />
                  </div>
                  <div className="brand_item_name">
                    <p>Apple Watch</p>
                  </div>
                </div>
                <div className="brand_item">
                  <div className="brand_item_image">
                    <img src="./images/content/index/product-by-brand/brand1.png" alt="" className="animation3d" />
                  </div>
                  <div className="brand_item_name">
                    <p>Apple Watch</p>
                  </div>
                </div>
              </div>
              <div className="list-product-by-brand row">
                <div className="new-product_item">
                  <div className="item_image">
                    <img src="./images/content/index/new-product/product1.jpg" width="90%" alt="" />
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
                    <p className="item_info_name">Ten san pham</p>
                    <p className="item_info_price">1.000.000₫</p>
                  </div>
                </div>
                <div className="new-product_item">
                  <div className="item_image">
                    <img src="./images/content/index/new-product/product1.jpg" width="90%" alt="" />
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
                    <p className="item_info_name">Ten san pham</p>
                    <p className="item_info_price">1.000.000₫</p>
                  </div>
                </div>
                <div className="new-product_item">
                  <div className="item_image">
                    <img src="./images/content/index/new-product/product1.jpg" width="90%" alt="" />
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
                    <p className="item_info_name">Ten san pham</p>
                    <p className="item_info_price">1.000.000₫</p>
                  </div>
                </div>
                <div className="new-product_item">
                  <div className="item_image">
                    <img src="./images/content/index/new-product/product1.jpg" width="90%" alt="" />
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
                    <p className="item_info_name">Ten san pham</p>
                    <p className="item_info_price">1.000.000₫</p>
                  </div>
                </div>
                <div className="new-product_item">
                  <div className="item_image">
                    <img src="./images/content/index/new-product/product1.jpg" width="90%" alt="" />
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
                    <p className="item_info_name">Ten san pham</p>
                    <p className="item_info_price">1.000.000₫</p>
                  </div>
                </div>
                <div className="new-product_item">
                  <div className="item_image">
                    <img src="./images/content/index/new-product/product1.jpg" width="90%" alt="" />
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
                    <p className="item_info_name">Ten san pham</p>
                    <p className="item_info_price">1.000.000₫</p>
                  </div>
                </div>
                <div className="new-product_item">
                  <div className="item_image">
                    <img src="./images/content/index/new-product/product1.jpg" width="90%" alt="" />
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
                    <p className="item_info_name">Ten san pham</p>
                    <p className="item_info_price">1.000.000₫</p>
                  </div>
                </div>
                <div className="new-product_item">
                  <div className="item_image">
                    <img src="./images/content/index/new-product/product1.jpg" width="90%" alt="" />
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
                    <p className="item_info_name">Ten san pham</p>
                    <p className="item_info_price">1.000.000₫</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                    <div className="swiper-wrapper">
                      <div className="swiper-slide watch-for-man_item">
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
                          <p className="item_info_name">Ten san pham</p>
                          <p className="item_info_price">1.000.000₫</p>
                        </div>
                      </div>
                      <div className="swiper-slide watch-for-man_item">
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
                          <p className="item_info_name">Ten san pham</p>
                          <p className="item_info_price">1.000.000₫</p>
                        </div>
                      </div>
                      <div className="swiper-slide watch-for-man_item">
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
                          <p className="item_info_name">Ten san pham</p>
                          <p className="item_info_price">1.000.000₫</p>
                        </div>
                      </div>
                      <div className="swiper-slide watch-for-man_item">
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
                          <p className="item_info_name">Ten san pham</p>
                          <p className="item_info_price">1.000.000₫</p>
                        </div>
                      </div>
                      <div className="swiper-slide watch-for-man_item">
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
                          <p className="item_info_name">Ten san pham</p>
                          <p className="item_info_price">1.000.000₫</p>
                        </div>
                      </div>
                      <div className="swiper-slide watch-for-man_item">
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
                          <p className="item_info_name">Ten san pham</p>
                          <p className="item_info_price">1.000.000₫</p>
                        </div>
                      </div>
                      <div className="swiper-slide watch-for-man_item">
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
                          <p className="item_info_name">Ten san pham</p>
                          <p className="item_info_price">1.000.000₫</p>
                        </div>
                      </div>
                    </div>
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
          <div className="watch-for-woman">
            <div className="container">
              <div className="row">
                <h2 className="title">
                  <span className="big">Đồng hồ cho nữ</span>
                  <span className="mini">
                    Những sản phẩm mới nhất, thông minh nhất đã được Delta Watch cập nhật vào bộ sưu tập
                  </span>
                </h2>
              </div>
              <div className="row mt-5">
                <div className="col-xl-4 col-lg-4 col-sm-5 pl-0 pr-0" style={{overflow: 'hidden'}}>
                  <img src="./images/content/index/watch-for-woman/bannner_leftnuwatch.jpg" alt="" className="watch-for-woman_banner" />
                </div>
                <div className="col-xl-8 col-lg-8 col-sm-7 pl-0 pr-0">
                  <div className="swiper-container watch-for-woman_list">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide watch-for-woman_item">
                        <div className="item_image">
                          <img src="./images/content/index/watch-for-woman/product1.jpg" width="100%" alt="" />
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
                          <p className="item_info_name">Ten san pham</p>
                          <p className="item_info_price">1.000.000₫</p>
                        </div>
                        <img src="./images/content/index/watch-for-woman/option.png" alt="" className="item_image_option" />
                      </div>
                      <div className="swiper-slide watch-for-woman_item">
                        <div className="item_image">
                          <img src="./images/content/index/watch-for-woman/product1.jpg" width="100%" alt="" />
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
                          <p className="item_info_name">Ten san pham</p>
                          <p className="item_info_price">1.000.000₫</p>
                        </div>
                      </div>
                      <div className="swiper-slide watch-for-woman_item">
                        <div className="item_image">
                          <img src="./images/content/index/watch-for-woman/product1.jpg" width="100%" alt="" />
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
                          <p className="item_info_name">Ten san pham</p>
                          <p className="item_info_price">1.000.000₫</p>
                        </div>
                      </div>
                      <div className="swiper-slide watch-for-woman_item">
                        <div className="item_image">
                          <img src="./images/content/index/watch-for-woman/product1.jpg" width="100%" alt="" />
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
                          <p className="item_info_name">Ten san pham</p>
                          <p className="item_info_price">1.000.000₫</p>
                        </div>
                      </div>
                      <div className="swiper-slide watch-for-woman_item">
                        <div className="item_image">
                          <img src="./images/content/index/watch-for-woman/product1.jpg" width="100%" alt="" />
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
                          <p className="item_info_name">Ten san pham</p>
                          <p className="item_info_price">1.000.000₫</p>
                        </div>
                      </div>
                      <div className="swiper-slide watch-for-woman_item">
                        <div className="item_image">
                          <img src="./images/content/index/watch-for-woman/product1.jpg" width="100%" alt="" />
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
                          <p className="item_info_name">Ten san pham</p>
                          <p className="item_info_price">1.000.000₫</p>
                        </div>
                      </div>
                      <div className="swiper-slide watch-for-woman_item">
                        <div className="item_image">
                          <img src="./images/content/index/watch-for-woman/product1.jpg" width="100%" alt="" />
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
                          <p className="item_info_name">Ten san pham</p>
                          <p className="item_info_price">1.000.000₫</p>
                        </div>
                      </div>
                    </div>
                    {/* Add Arrows */}
                    <div className="swiper-button-next watch-for-woman_slide-next">
                      <img src="./images/content/index/watch-for-woman/control_slide.png" alt="" />
                    </div>
                    <div className="swiper-button-prev watch-for-woman_slide-prev">
                      <img src="./images/content/index/watch-for-woman/control_slide.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                  <div className="swiper-wrapper">
                    <div className="swiper-slide best-equipment_item">
                      <div className="item_image">
                        <img src="./images/content/index/best-equipment/product1.jpg" width="90%" alt="" />
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
                      <div className="item_info">
                        <p className="item_info_name">Ten san pham</p>
                        <p className="item_info_price">1.000.000₫</p>
                      </div>
                    </div>
                    <div className="swiper-slide best-equipment_item">
                      <div className="item_image">
                        <img src="./images/content/index/best-equipment/product1.jpg" width="90%" alt="" />
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
                      <div className="item_info">
                        <p className="item_info_name">Ten san pham</p>
                        <p className="item_info_price">1.000.000₫</p>
                      </div>
                    </div>
                    <div className="swiper-slide best-equipment_item">
                      <div className="item_image">
                        <img src="./images/content/index/best-equipment/product1.jpg" width="90%" alt="" />
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
                      <div className="item_info">
                        <p className="item_info_name">Ten san pham</p>
                        <p className="item_info_price">1.000.000₫</p>
                      </div>
                    </div>
                    <div className="swiper-slide best-equipment_item">
                      <div className="item_image">
                        <img src="./images/content/index/best-equipment/product1.jpg" width="90%" alt="" />
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
                      <div className="item_info">
                        <p className="item_info_name">Ten san pham</p>
                        <p className="item_info_price">1.000.000₫</p>
                      </div>
                    </div>
                    <div className="swiper-slide best-equipment_item">
                      <div className="item_image">
                        <img src="./images/content/index/best-equipment/product1.jpg" width="90%" alt="" />
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
                      <div className="item_info">
                        <p className="item_info_name">Ten san pham</p>
                        <p className="item_info_price">1.000.000₫</p>
                      </div>
                    </div>
                    <div className="swiper-slide best-equipment_item">
                      <div className="item_image">
                        <img src="./images/content/index/best-equipment/product1.jpg" width="90%" alt="" />
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
                      <div className="item_info">
                        <p className="item_info_name">Ten san pham</p>
                        <p className="item_info_price">1.000.000₫</p>
                      </div>
                    </div>
                  </div>
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
          <div className="knowledge">
            <div className="container">
              <div className="row">
                <h2 className="title">
                  <span className="big">Kiến thức đồng hồ</span>
                  <span className="mini">
                    Những sản phẩm mới nhất, thông minh nhất đã được Delta Watch cập nhật vào bộ sưu tập
                  </span>
                </h2>
              </div>
            </div>
            <div className="container mt-5">
              <div className="row justify-content-between">
                <div className="knowledge_item">
                  <div className="tag-date">25/11/2019</div>
                  <div className="knowledge_item_img">
                    <img src="./images/content/index/knowledge/post1.jpg" alt="" width="100%" />
                  </div>
                  <div className="knowledge_item_des">
                    <p className="des_author">Đăng bởi: Đào Thị Uyên</p>
                    <a href="#" title="Đồng hồ thông minh Apple Watch mới ra mắt">Đồng hồ thông minh Apple Watch mới ra mắt</a>
                  </div>
                </div>
                <div className="knowledge_item">
                  <div className="tag-date">25/11/2019</div>
                  <div className="knowledge_item_img">
                    <img src="./images/content/index/knowledge/post1.jpg" alt="" width="100%" />
                  </div>
                  <div className="knowledge_item_des">
                    <p className="des_author">Đăng bởi: Đào Thị Uyên</p>
                    <a href="#" title="Đồng hồ thông minh Apple Watch mới ra mắt">Đồng hồ thông minh Apple Watch mới ra mắt</a>
                  </div>
                </div>
                <div className="knowledge_item">
                  <div className="tag-date">25/11/2019</div>
                  <div className="knowledge_item_img">
                    <img src="./images/content/index/knowledge/post1.jpg" alt="" width="100%" />
                  </div>
                  <div className="knowledge_item_des">
                    <p className="des_author">Đăng bởi: Đào Thị Uyên</p>
                    <a href="#" title="Đồng hồ thông minh Apple Watch mới ra mắt">Đồng hồ thông minh Apple Watch mới ra mắt</a>
                  </div>
                </div>
                <div className="knowledge_item">
                  <div className="tag-date">25/11/2019</div>
                  <div className="knowledge_item_img">
                    <img src="./images/content/index/knowledge/post1.jpg" alt="" width="100%" />
                  </div>
                  <div className="knowledge_item_des">
                    <p className="des_author">Đăng bởi: Đào Thị Uyên</p>
                    <a href="#" title="Đồng hồ thông minh Apple Watch mới ra mắt">Đồng hồ thông minh Apple Watch mới ra mắt</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}


export default TrangChu;