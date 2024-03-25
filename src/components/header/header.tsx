import React from "react";
import "./../header/header.css"
import Img from './../../img/logo.png'
import Img2 from './../../img/User.png'

const Header = () => {
    return (
        <header className="header">
                <div className="header_row">
                    <div className="header_logo">
                        <img src={Img} alt="logo" />
                    </div>
                    <div className="header_nav">
                        <ul>
                            <li><a href="#!">Marketplace</a></li>
                            <li><a href="#!">Rankings</a></li>
                            <li><a href="#!">Connect a wallet</a></li>
                            <li><a href="#!" className='header_nav-button'><img className="user" src={Img2} alt="User" />Sign Up</a></li>
                        </ul>
                    </div>
                </div>
        </header>
    );
}

export default Header;