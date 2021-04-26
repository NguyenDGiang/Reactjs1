import '../Sass/chitiet.scss';
function ChiTietSanPham(){
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
          <div className="content_main container">
            <div className="row justify-content-between">
              <div className="content_main-left col-xl-5 col-lg-5 col-sm-12">
                <div className="row">
                  <div className="big-pic">
                    <img className="big-pic-active" src="./images/content/product_detail/detail1.jpg" alt="" width="100%" />
                    <img src="./images/content/product_detail/detail2.jpg" alt="" width="100%" />
                    <img src="./images/content/product_detail/detail3.jpg" alt="" width="100%" />
                    <img src="./images/content/product_detail/detail4.jpg" alt="" width="100%" />
                  </div>
                  <div className="thumbnail">
                    <img className="thumbnail-active" src="./images/content/product_detail/detail1.jpg" alt="" width="100%" />
                    <img src="./images/content/product_detail/detail2.jpg" alt="" width="100%" />
                    <img src="./images/content/product_detail/detail3.jpg" alt="" width="100%" />
                    <img src="./images/content/product_detail/detail4.jpg" alt="" width="100%" />
                  </div>
                </div>
              </div>
              <div className="content_main-right col-xl-6 col-lg-6 col-sm-12 pr-0">
                <form method="post">
                  <h1 className="title-product">Samsung Gear Fit</h1>
                  <p className="price-product">4.990.000₫</p>
                  <p className="des-product">
                    Theo dõi giấc ngủ, Đo nhịp tim, Tính lượng Calories tiêu thụ, 
                    Đếm số bước chân, Tính quãng đường chạy, 
                    Chế độ luyện tập, Nghe nhạc với tai nghe Bluetooth, 
                    Màn hình luôn hiển thị, Gọi điện trên đồng hồ, Từ chối cuộc gọi, 
                    Dự báo thời tiết, La bàn, Thay mặt đồng hồ, Nhận cuộc gọi, 
                    Tìm điện thoại
                  </p>
                  <div className="option-size">
                    <h4>Kích Thước:</h4>
                    <input type="radio" name="size" id="size42mm" defaultChecked />
                    <label htmlFor="size42mm">42mm</label>
                    <input type="radio" name="size" id="size44mm" />
                    <label htmlFor="size44mm">44mm</label>
                  </div>
                  <div className="option-color">
                    <h4>Màu sắc:</h4>
                    <input type="radio" name="size" id="colorBlack" />
                    <label htmlFor="colorBlack" style={{backgroundColor: 'black'}}>
                      <div>
                        Đen
                      </div>
                    </label>
                    <input type="radio" name="size" id="colorWhite" />
                    <label htmlFor="colorWhite" style={{backgroundColor: '#999'}}>
                      <div>
                        Bạc
                      </div>
                    </label>
                  </div>
                  <div className="option-quantity">
                    <h4>Số Lượng</h4>
                    <div className="quantity">
                      <button type="button" onclick="if (document.getElementById('quantity').value > 1 ) {
                                                document.getElementById('quantity').value = parseInt(document.getElementById('quantity').value) - 1 }">
                        <i className="fas fa-minus-circle" />
                      </button>
                      <input type="number" name="quantity" id="quantity" defaultValue={1} />
                      <button type="button" onclick="if (document.getElementById('quantity').value < 100 ) {
                                                document.getElementById('quantity').value = parseInt(document.getElementById('quantity').value) + 1 }"><i className="fas fa-plus-circle" /></button>
                    </div>
                    <div>
                      <button className="add-to-cart">
                        <i className="fas fa-shopping-basket" /> Thêm vào giỏ hàng
                      </button>
                      <button className="buy-now">
                        <i className="fas fa-check" />
                        Mua ngay
                      </button>
                    </div>
                  </div>
                  <div className="free-discuss">
                    <h4>
                      <i className="fas fa-paper-plane" />&nbsp;Tư vấn miễn phí
                    </h4>
                    <div className>
                      <input placeholder="Số điện thoại" type="text" className="form-control form-control-lg" />
                      <button className="btn">Gửi ngay</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="content_info container">
            <div className="row">
              <ul className="content_info_option">	
                <li className="active">
                  <label htmlFor="info_detail" onclick="document.querySelector('.content_info_option li.active').classList.remove('active'); this.parentNode.classList.add('active')">
                    <span>Thông tin chi tiết</span>
                  </label>
                </li>																	
                <li>
                  <label htmlFor="info_guarantee" onclick="document.querySelector('.content_info_option li.active').classList.remove('active'); this.parentNode.classList.add('active')">
                    <span>Chính sách bảo hành</span>
                  </label>
                </li>																	
              </ul>
              <input type="radio" name="info_option" id="info_detail" defaultChecked />
              <div className="show_info_option">
                <p>So với các sản phẩm&nbsp;đồng hồ thông minh&nbsp;khác thì dung lượng pin của Huawei Watch GT2 vượt trội hơn rất nhiều.</p>
                <p>Thời lượng pin lên đến&nbsp;<strong>14 ngày</strong>&nbsp;với mục đích sử dụng thông thường như xem giờ, theo dõi vận động thì, khi bật GPS định vị liên tục đồng hồ của bạn sẽ sử dụng được trong&nbsp;<strong>30 giờ</strong>, còn với việc đàm thoại qua bluetooth, gọi điện liên tục trong&nbsp;<strong>10 giờ</strong>.</p>
                <p><img src="./images/content/product_detail/content_info1.jpg" alt="" width="100%" /></p>
                <h3>Trả lời cuộc gọi trực tiếp trên đồng hồ</h3>
                <p>Đồng hồ thông minh trang bị loa, micro... nghe nhận cuộc gọi trực tiếp không gần điện thoại, bạn có thể vừa chạy bộ vừa nghe điện thoại.</p>
                <p>Nếu kết hợp với&nbsp;điên thoại Huawei&nbsp;thì khả năng kết nối của đồng hồ với&nbsp;điện thoại&nbsp;có thể lên đến&nbsp;<strong>150m</strong>.</p>
                <p><img src="./images/content/product_detail/content_info2.jpg" alt="" width="100%" /></p>
                <h3>Nghe nhạc bằng loa ngoài</h3>
                <p>Bạn có thể dễ dàng điều khiển âm nhạc như trên một chiếc điện thoại thông thường như tua bài, chọn bài.</p>
                <p>Hơn nữa có thể chép nhạc vào đồng hồ và nghe, số lượng bài hát có thể lưu được khoảng&nbsp;<strong>500 bài hát</strong>.</p>
                <p><img src="./images/content/product_detail/content_info3.jpg" alt="" width="100%" /></p>
              </div>
              <input type="radio" name="info_option" id="info_guarantee" />
              <div className="show_info_option">
                <p>Nội dung tùy chỉnh viết ở đây</p>
              </div>
            </div>
          </div>
          <div className="relate-product">
            <div className="container">
              <div className="row">
                <h2 className="title">
                  <span className="big">Sản phẩm liên quan</span>
                  <span className="mini">
                    Những sản phẩm mới nhất, thông minh nhất đã được Delta Watch cập nhật vào bộ sưu tập
                  </span>
                </h2>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="swiper-container relate-product_list">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide relate-product_item">
                      <div className="item_image">
                        <img src="./images/content/product_detail/product1.jpg" width="90%" alt="" />
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
                        <img src="./images/content/product_detail/option.png" alt="" className="item_image_option" />
                      </div>
                      <div className="item_info">
                        <p className="item_info_name">Ten san pham</p>
                        <p className="item_info_price">1.000.000₫</p>
                      </div>
                    </div>
                    <div className="swiper-slide relate-product_item">
                      <div className="item_image">
                        <img src="./images/content/product_detail/product1.jpg" width="90%" alt="" />
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
                        <img src="./images/content/product_detail/option.png" alt="" className="item_image_option" />
                      </div>
                      <div className="item_info">
                        <p className="item_info_name">Ten san pham</p>
                        <p className="item_info_price">1.000.000₫</p>
                      </div>
                    </div>
                    <div className="swiper-slide relate-product_item">
                      <div className="item_image">
                        <img src="./images/content/product_detail/product1.jpg" width="90%" alt="" />
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
                        <img src="./images/content/product_detail/option.png" alt="" className="item_image_option" />
                      </div>
                      <div className="item_info">
                        <p className="item_info_name">Ten san pham</p>
                        <p className="item_info_price">1.000.000₫</p>
                      </div>
                    </div>
                    <div className="swiper-slide relate-product_item">
                      <div className="item_image">
                        <img src="./images/content/product_detail/product1.jpg" width="90%" alt="" />
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
                        <img src="./images/content/product_detail/option.png" alt="" className="item_image_option" />
                      </div>
                      <div className="item_info">
                        <p className="item_info_name">Ten san pham</p>
                        <p className="item_info_price">1.000.000₫</p>
                      </div>
                    </div>
                    <div className="swiper-slide relate-product_item">
                      <div className="item_image">
                        <img src="./images/content/product_detail/product1.jpg" width="90%" alt="" />
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
                        <img src="./images/content/product_detail/option.png" alt="" className="item_image_option" />
                      </div>
                      <div className="item_info">
                        <p className="item_info_name">Ten san pham</p>
                        <p className="item_info_price">1.000.000₫</p>
                      </div>
                    </div>
                    <div className="swiper-slide relate-product_item">
                      <div className="item_image">
                        <img src="./images/content/product_detail/product1.jpg" width="90%" alt="" />
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
                        <img src="./images/content/product_detail/option.png" alt="" className="item_image_option" />
                      </div>
                      <div className="item_info">
                        <p className="item_info_name">Ten san pham</p>
                        <p className="item_info_price">1.000.000₫</p>
                      </div>
                    </div>
                    <div className="swiper-slide relate-product_item">
                      <div className="item_image">
                        <img src="./images/content/product_detail/product1.jpg" width="90%" alt="" />
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
                        <img src="./images/content/product_detail/option.png" alt="" className="item_image_option" />
                      </div>
                      <div className="item_info">
                        <p className="item_info_name">Ten san pham</p>
                        <p className="item_info_price">1.000.000₫</p>
                      </div>
                    </div>
                    <div className="swiper-slide relate-product_item">
                      <div className="item_image">
                        <img src="./images/content/product_detail/product1.jpg" width="90%" alt="" />
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
                        <img src="./images/content/product_detail/option.png" alt="" className="item_image_option" />
                      </div>
                      <div className="item_info">
                        <p className="item_info_name">Ten san pham</p>
                        <p className="item_info_price">1.000.000₫</p>
                      </div>
                    </div>
                    <div className="swiper-slide relate-product_item">
                      <div className="item_image">
                        <img src="./images/content/product_detail/product1.jpg" width="90%" alt="" />
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
                        <img src="./images/content/product_detail/option.png" alt="" className="item_image_option" />
                      </div>
                      <div className="item_info">
                        <p className="item_info_name">Ten san pham</p>
                        <p className="item_info_price">1.000.000₫</p>
                      </div>
                    </div>
                    <div className="swiper-slide relate-product_item">
                      <div className="item_image">
                        <img src="./images/content/product_detail/product1.jpg" width="90%" alt="" />
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
                        <img src="./images/content/product_detail/option.png" alt="" className="item_image_option" />
                      </div>
                      <div className="item_info">
                        <p className="item_info_name">Ten san pham</p>
                        <p className="item_info_price">1.000.000₫</p>
                      </div>
                    </div>
                  </div>
                  {/* Add Arrows */}
                  <div className="swiper-button-next relate-product_slide-next">
                    <img src="./images/content/product_detail/control_slide.png" alt="" />
                  </div>
                  <div className="swiper-button-prev relate-product_slide-prev">
                    <img src="./images/content/product_detail/control_slide.png" alt="" />
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
                    <img src="./images/content/product_detail/post1.jpg" alt="" width="100%" />
                  </div>
                  <div className="knowledge_item_des">
                    <p className="des_author">Đăng bởi: Đào Thị Uyên</p>
                    <a href="#" title="Đồng hồ thông minh Apple Watch mới ra mắt">Đồng hồ thông minh Apple Watch mới ra mắt</a>
                  </div>
                </div>
                <div className="knowledge_item">
                  <div className="tag-date">25/11/2019</div>
                  <div className="knowledge_item_img">
                    <img src="./images/content/product_detail/post1.jpg" alt="" width="100%" />
                  </div>
                  <div className="knowledge_item_des">
                    <p className="des_author">Đăng bởi: Đào Thị Uyên</p>
                    <a href="#" title="Đồng hồ thông minh Apple Watch mới ra mắt">Đồng hồ thông minh Apple Watch mới ra mắt</a>
                  </div>
                </div>
                <div className="knowledge_item">
                  <div className="tag-date">25/11/2019</div>
                  <div className="knowledge_item_img">
                    <img src="./images/content/product_detail/post1.jpg" alt="" width="100%" />
                  </div>
                  <div className="knowledge_item_des">
                    <p className="des_author">Đăng bởi: Đào Thị Uyên</p>
                    <a href="#" title="Đồng hồ thông minh Apple Watch mới ra mắt">Đồng hồ thông minh Apple Watch mới ra mắt</a>
                  </div>
                </div>
                <div className="knowledge_item">
                  <div className="tag-date">25/11/2019</div>
                  <div className="knowledge_item_img">
                    <img src="./images/content/product_detail/post1.jpg" alt="" width="100%" />
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
    );
}

export default ChiTietSanPham;