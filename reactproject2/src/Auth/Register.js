import React, { useState } from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";
import { Redirect } from 'react-router';
import { useHistory } from "react-router";
function Register(props){
  const [data, setdata] = useState({ Email: '', Password: '', ConfirmPassword: ''}) 
  const [error, setError] = useState([]);
  const apiUrl = "https://localhost:44318/api/Account/PostDangKy";   
  const onChange = (e)=> {    
      
      setdata({...data, [e.target.name]: e.target.value});  
      
    }  
    let history = useHistory();
    function DangKy(e) {
      e.preventDefault(); 
      let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regEmail.test(data.Email)) {
        alert("Nhập sai email");
        return 0;
      }
      console.log(data);
      if(data.Password!==data.ConfirmPassword){
        alert("password,confirmpassword chưa trùng");
        return 0;
      }
      const data1 = { email: data.Email, password: data.Password, confirmPassword:data.ConfirmPassword};  
      
    axios.post(apiUrl, { email: data.Email, password: data.Password, confirmPassword:data.ConfirmPassword})  
      .then((result) => {  
         setError(result.data.errors);
        if(result.data.succeeded == true){
          alert('Dang Ky Thanh Cong');
          history.push("/Login"); 
        }
        else{
          alert(error.map((e)=>{
            return e.description;
          }));
        }
        
      }) 
      
    }
 console.log(error);
    


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
                  <input type="email" placeholder="Email" name ="Email" defaultValue = {data.Email} className="form-control" onChange={onChange}/> 
                  <input type="password" placeholder="Mật khẩu" name = "Password" defaultValue={data.Password} className="form-control" onChange={onChange}/>
                  <input type="password" placeholder=" Nhập Lại Mật khẩu" name ="ConfirmPassword" defaultValue={data.ConfirmPassword} className="form-control" onChange={onChange}/>
                  <button onClick = {DangKy}>Đăng ký</button>
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