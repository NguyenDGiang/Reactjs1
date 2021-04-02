import logo from './logo.svg';
import './App.css';
import Product from './Product/Product.js';
import './Sass/product.scss';
import './Sass/header.scss';
import './Sass/nav-bar.scss';
import './Css/bootstrap.css';
import { Swiper, SwiperSlide } from 'swiper/react';
function App() {
  return (
    <div className="App">
      <Product/>
    </div>
  );
}

export default App;
