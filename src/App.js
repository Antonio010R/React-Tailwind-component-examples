import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/main";
import Email from "./components/1-Email-Subscribe-Card/email";
import CardList from "./components/2-Pricing-Cards/cardList";
import ProductModel from "./components/3-Product-model/product-model";
import ImageGallery from "./components/4-Image-Gallery/image-gallery";
import LoginPage from "./components/5-Login-Model/login-page";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="1-email" element={<Email />} />
      <Route path="2-pricing-cards" element={<CardList />} />
      <Route path="3-product-model" element={<ProductModel />} />
      <Route path="4-image-gallery" element={<ImageGallery />} />
      <Route path="5-login-model" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
