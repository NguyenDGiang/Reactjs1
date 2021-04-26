import React, { useState } from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";
import { Redirect } from 'react-router';
import { useHistory } from "react-router";
function Login(){
  const [data, setdata] = useState({ Email: '', Password: ''}) 
  const [error, setError] = useState([]);
  const apiUrl = "https://localhost:44318/api/Account/Login";   
  const onChange = (e)=> {    
      
      setdata({...data, [e.target.name]: e.target.value});  
      
    }  
    let history = useHistory();
    function DangNhap(e) {
      e.preventDefault(); 
    axios.post(apiUrl, { email: data.Email, password: data.Password})  
      .then((result) => {  
        
        if(result.data.user!=null){
          alert(`chúc mừng  ${result.data.user.userName } đăng nhập thành công`);
          history.push("/"); 
        }
        alert(result.data);
         
        
      }) 
      
    }
    console.log(data);
 console.log(error);
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
                  <input type="email" placeholder="Email" name ="Email" defaultValue = {data.Email} className="form-control" onChange={onChange}/>
                  <input type="password" placeholder="Password" name = "Password" defaultValue={data.Password} className="form-control" onChange={onChange}/>
                  <button onClick = {DangNhap}>Đăng nhập</button>
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