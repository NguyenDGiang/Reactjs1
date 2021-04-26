
import ListHang from "./ListHang";
import ListSanPhamTheoHang from "./ListSanPhamTheoHang";
import { useState ,useEffect} from "react/cjs/react.development";
import axios from 'axios';

function Hang(props){
    const [idNSX,setIdNSX] = useState();
    const [sanPhamNSX,setsanPhamNSX] = useState([]);
    function TheLoaiById(Id) {
        axios.get(`https://localhost:44318/api/NhaSanXuat/GetById?Id=${Id}`)
       .then(res => {
         setsanPhamNSX(res.data);
       })

      }
      
      useEffect(() => {
        fetch("https://localhost:44318/api/NhaSanXuat/GetById?Id=01")
        .then(res => res.json())
        .then(
          (result) => {
            setsanPhamNSX(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            
          }
        )
        
        }, []);
      
    

    return (
        <div className="product-by-brand">
            <div className="container">
              <div className="row">
                <h2 className="title">
                  <span className="big">Sản phẩm theo hãng</span>
                  <span className="mini">
                    Những sản phẩm mới nhất, thông minh nhất đã được Delta Watch cập nhật vào bộ sưu tập
                  </span>
                </h2>
              </div>
              <ListHang TheLoaiById={TheLoaiById}/>
              <ListSanPhamTheoHang sanPhamNSX={sanPhamNSX}/>
            </div>
          </div>
         
    );
}

export default Hang;