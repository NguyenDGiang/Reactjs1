import '../Sass/index.scss';
import '../Css/bootstrap.css';

import SanPhamMoi from './SanPhamMoi';
import Hang from './Hang';
import SanPhamNam from './SanPhamNam';
import SanPhamNu from './SanPhamNu';
import SanPhamNoiBat from './SanPhamNoiBat';

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

            <SanPhamMoi/>
          </div>



          <Hang/>
          <SanPhamNam/>
          
          <SanPhamNu/>
          <SanPhamNoiBat/>
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