import '../Sass/cart.scss';
import {CartContext} from '../Contexts/CartProvider';
import { useContext} from 'react';
function GioHang(props) {
    const context = useContext(CartContext);
    function  addQualities(params) {
        context.addQuality(params);
    }
    function  addGiamQualities(params) {
        context.addGiamQuality(params);
    }
    function  deleteCart(params) {
       
      context.deleteCart(params);
      
  }
    
    return(
        <div>
        {/* BREADCRUMB */}
        <div className="breadcrumb">
          <div className="container">
            <div className="row align-items-center">
              <a href="#">Trang chủ</a>
              <i className="fa fa-angle-right ml-3 mr-3" />
              <a href="#">Giỏ hàng</a>
            </div>
          </div>
        </div>
        {/* CONTENT */}
        <div className="content">
          <div className="container">
            <div className="row">
              <h4>GIỎ HÀNG CỦA BẠN</h4>
              <ul className="cart_list">
                {
                    context.cart.map((e,i)=>{
                        return(
                            <li className="cart_item">
                  <div className="item_image">
                    <img src={`/images/content/cart/${e.anh}`} alt="" width="100%" />
                  </div>
                  <div className="item_info">
                    <div>
                      <a href="#" className="name">Samsung Gear Pro</a>
                      <p className="price">{e.gia}</p>
                    </div>
                  </div>
                  <div className="item_quantity">
                    <div className="quantity">
                      <button type="button" onClick={()=>addGiamQualities(e)}>
                        <i className="fas fa-minus-circle" />
                      </button>
                      <input type="number" name="quantity" id="quantity" value={e.quality} />
                      <button type="button" ><i className="fas fa-plus-circle" onClick={()=>addQualities(e)}/></button>
                    </div>
                  </div>
                  <div className="item_total-price">
                    <p className="price">{e.quality*e.gia}₫</p>
                  </div>
                  <div className="item_cancel" onClick={()=>deleteCart(e)}>
                    <i className="fa fa-times" />
                  </div>
                </li>
             
                        );
                    })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}

export default GioHang;