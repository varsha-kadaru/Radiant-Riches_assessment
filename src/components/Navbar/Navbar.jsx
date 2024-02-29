import React from 'react';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='header'>
      <div className='header_search'>
        <div className="header__searchIcon">&#x1F50D;</div>
        <input className="header_search_input" type="text" placeholder="Search"/>
      </div>
      <div className='header_nav'>
        <div className='header_opt'>
          <span className='header_opt_one' >Categories</span>
        </div>
        <div className='header_opt'>
          <span className='header_opt_one'>Website Builders</span>
        </div>
        <div className='header_opt'>
          <span className='header_opt_one'>Todays deals</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
