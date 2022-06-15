import React from 'react'
import "./Header.css"

function Header() {
  return (
    <>
       <nav id="nav-bar">
          <a id="logo" href="/"><span id="logo-bold">SHOP</span>LANE</a>
          <a href="/#clothe-coll-heading" id="header-clothe">clothing</a>
          <a href="/#access-coll-heading" id="header-access">accessories</a>
          <div id="header-search-wrapper">
            <i id="header-search-icon" className="fas fa-search"></i>
            <input
              id="header-search"
              type="text"
              placeholder="Search for Clothing and Accessories"
            />
          </div>
  
          <div id="right-menu">
            <div id="header-cart-wrapper">
              <p id="header-cart-count">0</p>
              <a href="checkout.html">
                <i className="fas fa-shopping-cart"></i>
              </a>
            </div>
            <img id="header-user-img" src="https://scontent.fdel5-2.fna.fbcdn.net/v/t1.6435-9/83106114_107472117459189_7004898274578530304_n.png?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tN2SvxC4ji4AX8djbV2&_nc_ht=scontent.fdel5-2.fna&oh=00_AT-ysK9l6_ztJc1aBTrbUkcZY4pGYZ7AotMw3Pu2_auR0w&oe=62C8D32A" alt="a boy" />
          </div>
        </nav>
    </>
  )
}

export default Header
