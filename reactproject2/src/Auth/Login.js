function Login(){
    return (
        <div>
        {/* BREADCRUMB */}
        <div className="breadcrumb">
          <div className="container">
            <div className="row align-items-center">
              <a href="#">Trang chủ</a>
              <i className="fa fa-angle-right ml-3 mr-3" />
              <a href="#">Đăng nhập</a>
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
                  <input type="email" placeholder="Email" className="form-control" />
                  <input type="password" placeholder="Password" className="form-control" />
                  <button>Đăng nhập</button>
                </form>
                <a href="#" className="forget">Quên mật khẩu</a>
                <p>Hoặc đăng nhập bằng</p>
                <div className="d-flex justify-content-between">
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

export default Login;