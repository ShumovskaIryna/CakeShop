import React from 'react';

import { NavLink } from "react-router-dom"
import { Container, Row } from "reactstrap"
import './header.css';
import userIcon from "../../assets/images/1.jpeg"
import logo from "../../assets/images/logo.png"

const Header = () => {
  return (
    <header className='header'>
      <Container>
        <Row>
          <div className='nav-wrapper'>
            <div className='logo'>
              <img src={logo} alt="" />
              <div>
                <h1>Internet Shop</h1>
              </div>
            </div>
            <div className='navigation'>
              <ul className='menu'>
                <li className='nav_item'>
                  <NavLink to="home">Home</NavLink>
                </li>
                <li className='nav_item'>
                  <NavLink to="shop">Shop</NavLink>
                </li>
                <li className='nav_item'>
                  <NavLink to="cart">Cart</NavLink>
                </li>
              </ul>
            </div>
            <div className='nav_icons'>
              <span className='fav_icon'>
                <i class="ri-heart-line"></i>
              </span>
              <span className='cart_icon'>
                <i class="ri-shopping-bag-line"></i>
              </span>
              <span className='user_icon'>
                <img src={userIcon} alt="" className='user' />
              </span>
            </div>
            <div className='mobile_menu'>
              <span>
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header;