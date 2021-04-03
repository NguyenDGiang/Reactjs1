import OldSchoolMenuLink from './OldSchoolMenuLink';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
function NavBar(){
    return (

        <div className="nav-bar">
            <div className="container">
                <div className="row justify-content-center">
                    
                    <ul className="mb-0">
                        <li>
                            <OldSchoolMenuLink to="/" activeOnlyWhenExact={true} label="Trang Chủ"/>
                        </li>
                        
                        <li>
                            <i className="fa fa-angle-down" />
                            <OldSchoolMenuLink to="/sanpham" activeOnlyWhenExact={false} label="Sản Phẩm">
                                
                            </OldSchoolMenuLink>
                            
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
                            <i className="fa fa-angle-down" />
                            <OldSchoolMenuLink to="/smart-watch" activeOnlyWhenExact={false} label="SmartWatch">
                                
                            </OldSchoolMenuLink>
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
                            <Link to="/tin-tuc">
                            Tin tức
                            </Link>
                        </li>
                        <li>
                            <Link to="/ve-chung-toi">Về chúng tôi</Link>
                        </li>
                        <li>
                            <Link to="/dia-chi-cua-hang">Địa chỉ cửa hàng</Link>
                        </li>
                        
                    </ul>
                    
                </div>
            </div>
            
    </div>
    )
}

export default NavBar;