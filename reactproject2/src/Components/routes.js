import DiaChiCuaHang from '../DiaChiCuaHang/DiaChiCuaHang';
import TinTuc from '../TinTuc/TinTuc.js';
import SmartWatch from '../SmartWatch/SmartWatch.js';
import VeChungToi from '../VeChungToi/VeChungToi.js';
import TrangChu from '../TrangChu/TrangChu.js';
import Product from '../Product/Product.js';
import Login from '../Auth/Login.js';
import Register from '../Auth/Register';
import SanPhamDanhMuc from '../SanPhamDanhMucs/SanPhamDanhMuc';
import GioHang from '../GioHang/GioHang';
import ChiTietSanPham from '../ChiTietSanPham/ChiTietSanPham';
const routes =[
    
    {
        exact:false,
        path:"/sanpham",
        main:()=><Product/>
    },
    {
        exact:false,
        path:"/smart-watch",
        main:()=><SmartWatch/>
    },
    {
        exact:false,
        path:"/tin-tuc",
        main:()=><TinTuc/>
    },
    {
        exact:false,
        path:"/ve-chung-toi",
        main:()=><VeChungToi/>
    },
    {
        exact:false,
        path:"/dia-chi-cua-hang",
        main:()=><DiaChiCuaHang/>
    },
    {
        exact:false,
        path:"/login",
        main:()=><Login/>
    },
    {
        exact:false,
        path:"/register",
        main:()=><Register/>
    },
    {
        exact:false,
        path:"/giohang",
        main:()=><GioHang/>
    },
    {
        exact:false,
        path:"/chitietsanpham/:slug",
        main:({match})=><ChiTietSanPham match={match}/>
    },
    {
        exact:false,
        path:"/danhmuc/:slug",
        main:({match})=><SanPhamDanhMuc match={match}/>
    }

];
export default routes;