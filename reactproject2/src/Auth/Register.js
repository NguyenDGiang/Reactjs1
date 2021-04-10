function Register(){
    return(
        <div>
        {/* BREADCRUMB */}
        <div className="breadcrumb">
          <div className="container">
            <div className="row align-items-center">
              <a href="#">Trang chủ</a>
              <i className="fa fa-angle-right ml-3 mr-3" />
              <a href="#">Đăng ký</a>
            </div>
          </div>
        </div>
        {/* CONTENT */}
        <div className="content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-4 col-lg-4 col-md-6 content_main">
                <form>
                  <h4>Đăng nhập</h4>
                  <p>Nếu bạn chưa có tài khoản,&nbsp;<a href="#">đăng ký tại đây</a></p>
                  <input type="text" placeholder="Họ" className="form-control mt-3" />
                  <input type="text" placeholder="Tên" className="form-control" />
                  <input type="email" placeholder="Email" className="form-control" />
                  <input type="text" placeholder="Số điện thoại" className="form-control" />
                  <input type="password" placeholder="Mật khẩu" className="form-control" />
                  <button>Đăng ký</button>
                </form>
                <p className="mt-3">Hoặc đăng nhập bằng</p>
                <div className="d-flex justify-content-center">
                  <img src="/images/content/login/facebook.svg" alt="" />
                  <img src="/images/content/login/google.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
}
export default Register;