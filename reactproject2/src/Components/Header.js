import OldSchoolMenuLink from './OldSchoolMenuLink';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
function Header(){
    return (
        <div>
            <div className="header">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="header_contact">
                            <div className="account">
                                <span><i class="far fa-user-circle"></i>&nbsp;Tài khoản</span>
                                <ul className="header_sub-menu">
                                <li><OldSchoolMenuLink to="/login" activeOnlyWhenExact={false} label="Đăng Nhập"/></li>
                                <li><OldSchoolMenuLink to="/register" activeOnlyWhenExact={false} label="Đăng Ký"/></li>
                                </ul>
                            </div>
                            <div className="call">
                                <a href="#"><i class="fas fa-sms"></i>&nbsp;Chat</a>
                                <span>or</span>
                                <a className="fone" href="#">Call 0388287614</a>
                            </div>
                        </div>
                        <div className="header_logo">
                        <Link to="/">
                            <img src="./images/header/logo.png" alt="" width="100%" />
                        </Link>
                        </div>
                        <div className="header_search">
                        <ul>
                            <li>
                            <form>
                                <input type="text" className="form-control" placeholder="Tìm kiếm..." />
                                <button type="submit"><i class="fa fa-search"></i> </button>
                            </form>
                            <span><i className="fa fa-search" /> Tìm kiếm</span>
                            </li>
                            <span style={{fontWeight: 'normal', color: '#ebebeb', fontSize: '18px', marginTop: '-5px'}}>|</span>
                            <li>
                            <span><i class="fas fa-shopping-basket"></i>Giỏ hàng (0)</span>
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
        </div>
    )
}


export default Header;