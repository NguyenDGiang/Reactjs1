import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle} from '@fortawesome/free-solid-svg-icons';
import { faSms} from '@fortawesome/free-solid-svg-icons';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import { faShoppingBasket} from '@fortawesome/free-solid-svg-icons';

function Product() {
  return (
    <div>
        {/* MASK */}
        <div className="mask"> </div>
        {/* NOTIFICATION SALE */}
        <div className="notification-sale d-flex justify-content-center">
          <span className="text-price">Ngày 12.12 siêu sale</span>&nbsp;
          <span className="text-normal">giao hàng miễn phí cho đơn hàng trên 1 triệu với mã</span>&nbsp;
          <span className="notification-sale_code">Deltafree</span>&nbsp;
          <a href="#" className="notification-sale_link">Chi tiết</a>
        </div>
        {/* HEADER */}
        <div className="header">
          <div className="container">
            <div className="row justify-content-between">
              <div className="header_contact">
                <div className="account">
                  <span><FontAwesomeIcon icon={faUserCircle} />&nbsp;Tài khoản</span>
                  <ul className="header_sub-menu">
                    <li><a href="#">Đăng nhập</a></li>
                    <li><a href="#">Đăng ký</a></li>
                  </ul>
                </div>
                <div className="call">
                  <a href="#"><FontAwesomeIcon icon={faSms} />&nbsp;Chat</a>
                  <span>or</span>
                  <a className="fone" href="#">Call 0388287614</a>
                </div>
              </div>
              <div className="header_logo">
                <a href="#">
                  <img src="./images/header/logo.png" alt="" width="100%" />
                </a>
              </div>
              <div className="header_search">
                <ul>
                  <li>
                    <form>
                      <input type="text" className="form-control" placeholder="Tìm kiếm..." />
                      <button type="submit"><FontAwesomeIcon icon={faSearch} /> </button>
                    </form>
                    <span><i className="fa fa-search" /> Tìm kiếm</span>
                  </li>
                  <span style={{fontWeight: 'normal', color: '#ebebeb', fontSize: '18px', marginTop: '-5px'}}>|</span>
                  <li>
                    <span><FontAwesomeIcon icon={faShoppingBasket} />Giỏ hàng (0)</span>
                    <ul className="header_sub-menu">
                      <li><p>Không có sản phẩm nào.</p></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header-mobile">
          <div className="container">
            <div className="header-mobile_top row align-items-center pt-1 pb-1">
              <i className="fas fa-bars" onclick="showMobileMenu()" />
              <div className="logo">
                <img src="./images/header/logo.png" alt="" width="100%" />
              </div>
            </div>
            <div className="header-mobile_search row justify-content-between pt-2 pb-2">
              <div className="search">
                <span className="iconsearch">
                  <i className="fa fa-search" /> 
                  Tìm kiếm
                </span>
              </div>
              <form>
                <input type="text" className="form-control" placeholder="Tìm kiếm..." />
                <button type="submit"><i className="fa fa-search" /> </button>
              </form>
              <div className="icon_hotline">
                <i className="fas fa-shopping-basket iconcart" />
                <span>Giỏ hàng (0)</span>
              </div>
            </div>  
          </div>
          <div className="header-mobile_menu">
            <div style={{padding: '0 2rem', marginBottom: '1rem'}}>
              <a href="#">Đăng nhập</a>
              <span>/</span>
              <a href="#">Đăng ký</a>
            </div>
            <div className="header-mobile_menu-main">
              <ul className>
                <li className="menu-item">
                  <a href="#">Trang chủ</a>
                </li>
                <li className="menu-item has-sub-menu">
                  <a href="#">Sản phẩm</a>
                  <i className="fa fa-plus btn-show-sub-menu" />
                  <i className="fa fa-minus btn-close-sub-menu" />
                  <ul className="sub-menu menu-sub-1">
                    <li className="menu-item has-sub-menu">
                      <a href="#">Trang chủ</a>
                      <i className="fa fa-plus btn-show-sub-menu" />
                      <i className="fa fa-minus btn-close-sub-menu" />
                      <ul className="sub-menu menu-sub-2">
                        <li className="menu-item">
                          <a href="#">Trang chủ</a>
                        </li>
                        <li className="menu-item"><a href="#">Trang chur</a></li>
                      </ul>
                    </li>
                    <li className="menu-item">
                      <a href="#">Trang chur</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item has-sub-menu">
                  <a href="#">SmartWatch</a>
                  <i className="fa fa-plus btn-show-sub-menu" />
                  <i className="fa fa-minus btn-close-sub-menu" />
                  <ul className="sub-menu menu-sub-1">
                    <li className="menu-item has-sub-menu">
                      <a href="#">Trang chủ</a>
                      <i className="fa fa-plus btn-show-sub-menu" />
                      <i className="fa fa-minus btn-close-sub-menu" />
                      <ul className="sub-menu menu-sub-2">
                        <li className="menu-item">
                          <a href="#">Trang chủ</a>
                        </li>
                        <li className="menu-item"><a href="#">Trang chur</a></li>
                      </ul>
                    </li>
                    <li className="menu-item">
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
          </div>
        </div>
        {/* NAV BAR */}
        <div className="nav-bar">
          <div className="container">
            <div className="row justify-content-center">
              <ul className="mb-0">
                <li>
                  <a href="#">
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a href="#">
                    Sản phẩm
                    <i className="fa fa-angle-down" />
                  </a>
                  <div className="menu-product-drop-down">
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-3 col-lg-3">
                          <ul className="pl-0">
                            <h3>
                              <a href="/dong-ho-nam" title="Đồng hồ nam">Đồng hồ nam</a>
                            </h3>
                            <li>
                              <i className="fa fa-angle-right" /> 
                              <a href="#" title="Đồng hồ Philips">Đồng hồ Philips</a> 
                            </li>
                            <li>
                              <i className="fa fa-angle-right" /> 
                              <a href="#" title="Đồng hồ Epos swiss">Đồng hồ Epos swiss</a> 
                            </li>
                            <li>
                              <i className="fa fa-angle-right" /> 
                              <a href="#" title="Đồng hồ Eries gold">Đồng hồ Eries gold</a> 
                            </li>
                            <li>
                              <i className="fa fa-angle-right" /> 
                              <a href="#" title="Đồng hồ Citizen">Đồng hồ Citizen</a> 
                            </li>
                            <li>
                              <i className="fa fa-angle-right" /> 
                              <a href="#" title="Đồng hồ Tourbillon">Đồng hồ Tourbillon</a> 
                            </li>
                            <li>
                              <i className="fa fa-angle-right" /> 
                              <a href="#" title="Đồng hồ Du manoir">Đồng hồ Du manoir</a> 
                            </li>
                          </ul>
                        </div>
                        <div className="col-xl-3 col-lg-3">
                          <ul className="pl-0">
                            <h3>
                              <a href="/dong-ho-nam" title="Đồng hồ nam">Đồng hồ nam</a>
                            </h3>
                            <li>
                              <i className="fa fa-angle-right" /> 
                              <a href="#" title="Đồng hồ Philips">Đồng hồ Philips</a> 
                            </li>
                            <li>
                              <i className="fa fa-angle-right" /> 
                              <a href="#" title="Đồng hồ Epos swiss">Đồng hồ Epos swiss</a> 
                            </li>
                            <li>
                              <i className="fa fa-angle-right" /> 
                              <a href="#" title="Đồng hồ Eries gold">Đồng hồ Eries gold</a> 
                            </li>
                            <li>
                              <i className="fa fa-angle-right" /> 
                              <a href="#" title="Đồng hồ Citizen">Đồng hồ Citizen</a> 
                            </li>
                            <li>
                              <i className="fa fa-angle-right" /> 
                              <a href="#" title="Đồng hồ Tourbillon">Đồng hồ Tourbillon</a> 
                            </li>
                            <li>
                              <i className="fa fa-angle-right" /> 
                              <a href="#" title="Đồng hồ Du manoir">Đồng hồ Du manoir</a> 
                            </li>
                          </ul>
                        </div>
                        <div className="col-xl-3 col-lg-3">
                          <ul className="pl-0">
                            <h3>
                              <a href="/dong-ho-nam" title="Đồng hồ nam">Đồng hồ nam</a>
                            </h3>
                            <li>
                              <i className="fa fa-angle-right" /> 
                              <a href="#" title="Đồng hồ Philips">Đồng hồ Philips</a> 
                            </li>
                            <li>
                              <i className="fa fa-angle-right" /> 
                              <a href="#" title="Đồng hồ Epos swiss">Đồng hồ Epos swiss</a> 
                            </li>
                            <li>
                              <i className="fa fa-angle-right" /> 
                              <a href="#" title="Đồng hồ Eries gold">Đồng hồ Eries gold</a> 
                            </li>
                            <li>
                              <i className="fa fa-angle-right" /> 
                              <a href="#" title="Đồng hồ Citizen">Đồng hồ Citizen</a> 
                            </li>
                            <li>
                              <i className="fa fa-angle-right" /> 
                              <a href="#" title="Đồng hồ Tourbillon">Đồng hồ Tourbillon</a> 
                            </li>
                            <li>
                              <i className="fa fa-angle-right" /> 
                              <a href="#" title="Đồng hồ Du manoir">Đồng hồ Du manoir</a> 
                            </li>
                          </ul>
                        </div>
                        <div className="col-xl-3 col-lg-3">
                          <ul className="pl-0">
                            <h3>
                              <a href="/dong-ho-nam" title="Đồng hồ nam">Đồng hồ nam</a>
                            </h3>
                            <li>
                              <i className="fa fa-angle-right" /> 
                              <a href="#" title="Đồng hồ Philips">Đồng hồ Philips</a> 
                            </li>
                            <li>
                              <i className="fa fa-angle-right" /> 
                              <a href="#" title="Đồng hồ Epos swiss">Đồng hồ Epos swiss</a> 
                            </li>
                            <li>
                              <i className="fa fa-angle-right" /> 
                              <a href="#" title="Đồng hồ Eries gold">Đồng hồ Eries gold</a> 
                            </li>
                            <li>
                              <i className="fa fa-angle-right" /> 
                              <a href="#" title="Đồng hồ Citizen">Đồng hồ Citizen</a> 
                            </li>
                            <li>
                              <i className="fa fa-angle-right" /> 
                              <a href="#" title="Đồng hồ Tourbillon">Đồng hồ Tourbillon</a> 
                            </li>
                            <li>
                              <i className="fa fa-angle-right" /> 
                              <a href="#" title="Đồng hồ Du manoir">Đồng hồ Du manoir</a> 
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li style={{position: 'relative'}}>
                  <a href="#"> Smartwatch <i className="fa fa-angle-down" /></a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#" title="Apple Watch">Apple Watch </a>
                    </li>
                    <li>
                      <a href="#" title="Xiaomi Watch">Xiaomi Watch </a>
                    </li>
                    <li>
                      <a href="#" title="Huawei Watch">Huawei Watch</a>
                      <i className="fa fa-angle-right" /> 
                      <ul className="sub-menu-2">
                        <li><a href="#" title="Đồng hồ sức khỏe Mi">Đồng hồ sức khỏe Mi</a></li>
                      </ul>               
                    </li>
                    <li>
                      <a href="#" title="Phụ kiện nổi bật">Phụ kiện nổi bật </a> 
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    Tin tức
                  </a>
                </li>
                <li>
                  <a href="#">Về chúng tôi</a>
                </li>
                <li>
                  <a href="#">Địa chỉ cửa hàng</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
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
                    <div className="product_item">
                      <div className="item_image">
                        <img src="./images/content/product/list-product/product1.jpg" width="90%" alt="" />
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
                        <img src="./images/content/product/list-product/option.png" alt="" className="item_image_option" />
                      </div>
                      <div className="item_info">
                        <p className="item_info_name">Ten san pham</p>
                        <p className="item_info_price">1.000.000₫</p>
                      </div>
                    </div>
                    <div className="product_item">
                      <div className="item_image">
                        <img src="./images/content/product/list-product/product1.jpg" width="90%" alt="" />
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
                        <img src="./images/content/product/list-product/option.png" alt="" className="item_image_option" />
                      </div>
                      <div className="item_info">
                        <p className="item_info_name">Ten san pham</p>
                        <p className="item_info_price">1.000.000₫</p>
                      </div>
                    </div>
                    <div className="product_item">
                      <div className="item_image">
                        <img src="./images/content/product/list-product/product1.jpg" width="90%" alt="" />
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
                        <img src="./images/content/product/list-product/option.png" alt="" className="item_image_option" />
                      </div>
                      <div className="item_info">
                        <p className="item_info_name">Ten san pham</p>
                        <p className="item_info_price">1.000.000₫</p>
                      </div>
                    </div>
                    <div className="product_item">
                      <div className="item_image">
                        <img src="./images/content/product/list-product/product1.jpg" width="90%" alt="" />
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
                        <img src="./images/content/product/list-product/option.png" alt="" className="item_image_option" />
                      </div>
                      <div className="item_info">
                        <p className="item_info_name">Ten san pham</p>
                        <p className="item_info_price">1.000.000₫</p>
                      </div>
                    </div>
                    <div className="product_item">
                      <div className="item_image">
                        <img src="./images/content/product/list-product/product1.jpg" width="90%" alt="" />
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
                        <img src="./images/content/product/list-product/option.png" alt="" className="item_image_option" />
                      </div>
                      <div className="item_info">
                        <p className="item_info_name">Ten san pham</p>
                        <p className="item_info_price">1.000.000₫</p>
                      </div>
                    </div>
                    <div className="product_item">
                      <div className="item_image">
                        <img src="./images/content/product/list-product/product1.jpg" width="90%" alt="" />
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
                        <img src="./images/content/product/list-product/option.png" alt="" className="item_image_option" />
                      </div>
                      <div className="item_info">
                        <p className="item_info_name">Ten san pham</p>
                        <p className="item_info_price">1.000.000₫</p>
                      </div>
                    </div>
                    <div className="product_item">
                      <div className="item_image">
                        <img src="./images/content/product/list-product/product1.jpg" width="90%" alt="" />
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
                        <img src="./images/content/product/list-product/option.png" alt="" className="item_image_option" />
                      </div>
                      <div className="item_info">
                        <p className="item_info_name">Ten san pham</p>
                        <p className="item_info_price">1.000.000₫</p>
                      </div>
                    </div>
                    <div className="product_item">
                      <div className="item_image">
                        <img src="./images/content/product/list-product/product1.jpg" width="90%" alt="" />
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
                        <img src="./images/content/product/list-product/option.png" alt="" className="item_image_option" />
                      </div>
                      <div className="item_info">
                        <p className="item_info_name">Ten san pham</p>
                        <p className="item_info_price">1.000.000₫</p>
                      </div>
                    </div>
                    <div className="product_item">
                      <div className="item_image">
                        <img src="./images/content/product/list-product/product1.jpg" width="90%" alt="" />
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
                        <img src="./images/content/product/list-product/option.png" alt="" className="item_image_option" />
                      </div>
                      <div className="item_info">
                        <p className="item_info_name">Ten san pham</p>
                        <p className="item_info_price">1.000.000₫</p>
                      </div>
                    </div>
                    <div className="product_item">
                      <div className="item_image">
                        <img src="./images/content/product/list-product/product1.jpg" width="90%" alt="" />
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
                        <img src="./images/content/product/list-product/option.png" alt="" className="item_image_option" />
                      </div>
                      <div className="item_info">
                        <p className="item_info_name">Ten san pham</p>
                        <p className="item_info_price">1.000.000₫</p>
                      </div>
                    </div>
                    <div className="product_item">
                      <div className="item_image">
                        <img src="./images/content/product/list-product/product1.jpg" width="90%" alt="" />
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
                        <img src="./images/content/product/list-product/option.png" alt="" className="item_image_option" />
                      </div>
                      <div className="item_info">
                        <p className="item_info_name">Ten san pham</p>
                        <p className="item_info_price">1.000.000₫</p>
                      </div>
                    </div>
                    <div className="product_item">
                      <div className="item_image">
                        <img src="./images/content/product/list-product/product1.jpg" width="90%" alt="" />
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
                        <img src="./images/content/product/list-product/option.png" alt="" className="item_image_option" />
                      </div>
                      <div className="item_info">
                        <p className="item_info_name">Ten san pham</p>
                        <p className="item_info_price">1.000.000₫</p>
                      </div>
                    </div>
                    <div className="product_item">
                      <div className="item_image">
                        <img src="./images/content/product/list-product/product1.jpg" width="90%" alt="" />
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
                        <img src="./images/content/product/list-product/option.png" alt="" className="item_image_option" />
                      </div>
                      <div className="item_info">
                        <p className="item_info_name">Ten san pham</p>
                        <p className="item_info_price">1.000.000₫</p>
                      </div>
                    </div>
                    <div className="product_item">
                      <div className="item_image">
                        <img src="./images/content/product/list-product/product1.jpg" width="90%" alt="" />
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
                        <img src="./images/content/product/list-product/option.png" alt="" className="item_image_option" />
                      </div>
                      <div className="item_info">
                        <p className="item_info_name">Ten san pham</p>
                        <p className="item_info_price">1.000.000₫</p>
                      </div>
                    </div>
                    <div className="product_item">
                      <div className="item_image">
                        <img src="./images/content/product/list-product/product1.jpg" width="90%" alt="" />
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
                        <img src="./images/content/product/list-product/option.png" alt="" className="item_image_option" />
                      </div>
                      <div className="item_info">
                        <p className="item_info_name">Ten san pham</p>
                        <p className="item_info_price">1.000.000₫</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pagination">
                  <div className="pagination-prev">
                    <i className="fa fa-angle-left" />
                  </div>
                  <div className="page page-active">
                    1
                  </div>
                  <div className="page">
                    2
                  </div>
                  <div className="pagination-next">
                    <i className="fa fa-angle-right" />
                  </div>
                </div>
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
    );
}

export default Product;
