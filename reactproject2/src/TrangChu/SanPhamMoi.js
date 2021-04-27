import { useState,useEffect } from 'react';
import ListSanPhamMoi from './ListSanPhamMoi';

function SanPhamMoi(props){
    const [sanPham,setSanPham] = useState([]);
    
    useEffect(() => {
     
        fetch("https://localhost:44318/api/SanPham/GetSPMoi")
          .then(res => res.json())
          .then(
            (result) => {
              setSanPham(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              
            }
          )
      }, []);
    return(
        
              
                
                <ListSanPhamMoi listSPNsx={props.listSPNsx} sanPham ={sanPham} />
              
              
            
         
    );
}

export default SanPhamMoi;