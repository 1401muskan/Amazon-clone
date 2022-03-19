import React from 'react';
import "./Header.css";
import PropTypes from 'prop-types';
// import {Link} from "react-router-dom";
import logo from "./logo.png";
export default function Header() {
  return (
        <nav className='Navbar'>
      <div className="header">
        <div className='header__logo'>
          <img src={logo} alt='amazonlogo'>
          </img>
        </div>

        <div className="header__nav">
          <div className="header__option">
            <span className="header__home">Home</span>
          </div>

          <div className="header__option">
            <span className="header__featured">Featured</span>
          </div>

          <div className="header__option">
            <span className="header__products">Products</span>
          </div>
        </div>

      </div>
    </nav>
   
      
  )
}
  Header.defaultProps={
	title: "YourTitle here"
}

Header.propTypes = {
  title: PropTypes.string
};

