import DiaChiCuaHang from '../DiaChiCuaHang/DiaChiCuaHang';
import TinTuc from '../TinTuc/TinTuc.js';
import SmartWatch from '../SmartWatch/SmartWatch.js';
import VeChungToi from '../VeChungToi/VeChungToi.js';
import TrangChu from '../TrangChu/TrangChu.js';
import Product from '../Product/Product.js';
const routes =[
    {
        exact:true,
        path:"/",
        main:()=><TrangChu/>
    },
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
    }


];
export default routes;