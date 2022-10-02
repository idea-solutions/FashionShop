import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import BlogDetail from './pages/BlogDetail'
import LoginPage from "./pages/LoginPage";
import Admin from "./pages/Admin"
// import Register from "./components/AuththenComponent/Register";
import ContactPage from "./pages/ContactPage";
import AdimOverView from "./pages/AdimOverView";
// chứa các trang
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/blog" element={<Blog></Blog>}></Route>
      <Route path="/shop/detail/:id" element={<Product></Product>}></Route>
      <Route path="/blog/detail/:id" element={<BlogDetail/>}/>
      <Route path="/shop" element={<Shop/>}></Route>
      <Route path="/login" element={<LoginPage/>}></Route>
      <Route path="/contact" element={<ContactPage/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/adimOverView" element={<AdimOverView/>}></Route>
      <Route path="/admin" element={<Admin/>}></Route>

    </Routes>
  );
}

export default App;
