import { useState,useEffect } from 'react';
function ListHang(props){
    const [nhaSanXuat,setnhaSanXuat] = useState([]);
    useEffect(() => {
      fetch("https://localhost:44318/api/NhaSanXuat/GetALL")
      .then(res => res.json())
      .then(
        (result) => {
          setnhaSanXuat(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          
        }
      )
      
      }, []);
      function TheLoaiById(Id) {
        props.TheLoaiById(Id);
      }
    return (
        <div className="list-brand row">
            {
                nhaSanXuat.map((e,i)=>{
                    return (<div className="brand_item" onClick={()=>TheLoaiById(e.idNSX)}>
                    <div className="brand_item_image">
                      <img src="./images/content/index/product-by-brand/brand1.png" alt="" className="animation3d" />
                    </div>
                    <div className="brand_item_name">
                      <p>{e.tenNSX}</p>
                    </div>
                  </div>
                  );
                })
            }

              

              </div>
              
    );
}

export default ListHang;