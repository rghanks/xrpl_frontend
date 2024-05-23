import React from 'react'
import $ from 'jquery'

const Header = () => {

    const handleMenu = () => {
        $('.header__nav__option').slideToggle();
    }
   
  return (
    <>
        
       <header class="header">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-2">
                    <div class="header__logo">
                        <a href="/">
                            <img src="img/logo-first.png" alt="" />
                        </a>
                    </div>
                </div>
                <div class="col-lg-10">
                    <div class="header__nav__option">
                        <nav class="header__nav__menu mobile-menu">
                            <ul>
                                {/* <li class="active">
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/" target="_blank">Smart Contract</a>
                                </li> */}
                                {/* <li class="nav-item">
                                    <a href="community.html" class="btn btn-sm btn-primary ml-2 c-btn">
                                        Community
                                    </a>
                                </li> */}
                                {/* <li class="nav-item">
                                    <a href="javascript:void(0)" class="btn btn-sm btn-primary ml-2 c-btn" onclick="connectwallet()">
                                       
                                        <span id="spanwalletaddress">Connect Wallet</span>
                                    </a>
                                </li> */}
                                <li class="nav-item">
                                    {/* <a href="javascript:void(0)" class="btn btn-sm btn-primary mt-0 ml-2 c-btn">
                                        <i class="fas fa-wallet mr-2"></i>
                                        <span class="crl-aft">
                                            <span id="spanmaticbalance">0.0000</span> MATIC
                                        </span>
                                    </a> */}

                                    <w3m-button />
                                </li>
                                {/* <li>
                                    <div id="google_translate_element"></div>
                                </li> */}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div id="mobile-menu-wrap"></div>
        </div>
		<a href="#" class="menu-btn" onClick={handleMenu}>
            <i class="fa-solid fa-bars"></i>
        </a>
    </header>
       
       
    </>
  )
}

export default Header