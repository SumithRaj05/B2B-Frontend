import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './Components/Home/Home'
import Signup from './Components/Signup/Signup'
import Login from './Components/Login/Login'
import SellerDashboard from './Components/Account/Dashboard/Dashboard'
import Profile from './Components/Account/Profile/Seller/SellerProfile'
import SellerProducts from './Components/Account/Profile/Seller/SellerProducts/SellerProducts'
import ScrollToTop from './Components/ExtraComponents/ScrolltoTop'
import AddProduct from './Components/Account/Profile/Seller/SellerProducts/AddProduct/AddProduct'
import ProductDetails from './Components/Account/Profile/Seller/SellerProducts/ProductDetails/ProductDetails'
import EditProduct from './Components/Account/Profile/Seller/SellerProducts/EditProduct/EditProduct'

function App() {

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<SellerDashboard />} />
        <Route path="/seller_profile" element={<Profile />} />
        <Route path="/products" element={<SellerProducts />} />
        <Route path="/add_product" element={<AddProduct />} />
        <Route path="/product_details" element={<ProductDetails />} />
        <Route path="/edit_product" element={<EditProduct />} />
        
      </Routes>
    </>
  )
}

export default App
