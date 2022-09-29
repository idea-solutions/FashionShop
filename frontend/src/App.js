import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Card from "./pages/Card";
import BlogDetail from './pages/BlogDetail'
import LoginPage from "./pages/LoginPage";
import Register from "./components/AuththenComponent/Register";
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
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/card" element={<Card/>}></Route>
    </Routes>
  );
}

export default App;
