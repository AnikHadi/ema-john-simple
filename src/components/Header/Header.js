import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className='header'>
            <div className='brand-logo'>
                <img src={logo} alt="" />
            </div>
            <div className='nav-link'>
                <nav>
                    <a href="/shop">Shop</a>
                    <a href="/review">Order Review</a>
                    <a href="/manage">Manage Inventory here</a>
                </nav>
            </div>
            <div className='search-input'>
                <input className='form-control' type="text" placeholder='type here to search' /> 
                {/* <FontAwesomeIcon icon={faShoppingCart} /> */}
            </div>
        </div>
    );
};

export default Header;