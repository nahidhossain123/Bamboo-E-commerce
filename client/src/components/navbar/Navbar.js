import React, { useRef } from 'react';
import './NavbarStyle.css';
import menu from '../../media/menu.png';
import logo from '../../media/Logo.png';
import cart from '../../media/shopping-cart.png';
import search from '../../media/search.png';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const nav = useRef();
    const searchRef = useRef();
    const cartRef = useRef();
    let isSearchclick = true;
    let isCartClick = true;

    const handelSearch = ()=>{
        if(isSearchclick)
        {
            searchRef.current.style.top = "70px";
            cartRef.current.style.top = "-400%";
            isSearchclick = false;
            isCartClick = true;
        }
        else{
            searchRef.current.style.top = "-400%";
            isSearchclick = true;
        }
    }

    const handelCart = ()=>{
        if(isCartClick)
        {
            cartRef.current.style.top = "70px";
            searchRef.current.style.top = "-400%";
            isCartClick = false;
            isSearchclick = true;

        }
        else{
            cartRef.current.style.top = "-400%";
            isCartClick = true;

        }
    }


    const OpenMenu = ()=>{
        nav.current.style.top = "0";
        document.body.style.overflow = "hidden";
    }

    const CloseMenu = ()=>{
        nav.current.style.top = '-100%'
        document.body.style.overflow = "auto";
    }
  return (
    <div className='header-wrapper'>
        <div className='header-container container'>
            <div className='nav-item'>
                <img onClick={OpenMenu}  src={menu} alt="menu-bar" />
                <div className='nav-links' ref = {nav}>
                    <i onClick={CloseMenu} className="fa-solid fa-xmark"></i>
                    <ul>
                        <li><NavLink onClick={CloseMenu} to="/">Home</NavLink></li>
                        <li><NavLink onClick={CloseMenu} to="/case">Case Study</NavLink></li>
                        <li><NavLink onClick={CloseMenu} to="">About</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className='logo'>
                <Link to='/'><img src={logo}  alt="logo" /></Link>
            </div>
            <div className='right-nav'>
                <img onClick={handelSearch} src={search} alt="search" />
                <div ref={searchRef} className='search-input'>
                    <input type="text" name="search" placeholder="search..."/>
                </div>
                <img onClick={handelCart} src={cart} alt="cart" />
                <div ref={cartRef} className='cart-details'>
                    <span>Your Cart Is Empty</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar