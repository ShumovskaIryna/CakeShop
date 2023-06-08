import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom"
import Cart from '../pages/Cart'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

const Routers = () => {
  return (
    <div className="routers">
      <Routes>
        <Route path="/" element={<Navigate to="home"/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default Routers;
