import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home.jsx'
import SignUp from '../pages/SignUp.jsx'
import Login from '../pages/Login.jsx'
import AccountPage from '../pages/Account.jsx'
import Products from '../pages/Products.jsx'


const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/account" element={<AccountPage/>} />
            <Route path="/products" element={<Products/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes