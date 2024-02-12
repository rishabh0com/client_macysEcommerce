import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home.jsx'
import SignUp from '../pages/SignUp.jsx'
import Login from '../pages/Login.jsx'
import AccountPage from '../pages/Account.jsx'
import ProductPage from '../pages/Product.jsx'
import Products from '../pages/Products.jsx'
import Cart from '../pages/Cart.jsx'


const AllRoutes = () => {
  const access = localStorage.getItem("access");
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            {access && (<Route path="/account" element={<AccountPage/>}/>)}
            <Route path="/shop/cart" element={<Cart/>} />
            <Route path="/shop" element={<Products/>} />
            <Route path="/shop/:id" element={<ProductPage/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes