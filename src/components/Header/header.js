import React, {useState} from 'react';
import product from './../../assets/img/product.svg'
import {CgDarkMode} from "react-icons/cg";

const Header = ({getDark, dark}) => {

    return (
        <header id="header" style={{
            background: dark ? 'rgba(36,100,88,0.95)' : '',
            color: dark ? '#fff' : '',

        }}>
            <div className="container">
                <div className="header">
                    <div className="header--logo">
                        <img src={product} alt={product}/>
                        <h1 style={{
                            color: dark ? '#fff' : ''
                        }}>Product</h1>
                    </div>
                    <div className="header--navBar">
                        <nav className="header--navBar__nav">
                            <a style={{
                                color: dark ? '#fff' : '',


                            }} href="#">Product </a>
                            <a style={{
                                color: dark ? '#fff' : '',
                            }} href="#">Customers</a>
                            <a style={{
                                color: dark ? '#fff' : '',
                            }} href="#">Pricing </a>
                            <a style={{
                                color: dark ? '#fff' : '',
                            }} href="#">Resources </a>
                        </nav>

                        <button style={{
                            color: dark ? '#fff' : '',
                            background: dark ? '#02897A' : '',
                            border: dark ? 'none' : ''
                        }} className="header--navBar__btnOne">Sign In
                        </button>
                        <button style={{
                            color: dark ? '#02897A' : '',
                            background: dark ? '#fff' : ''
                        }} className="header--navBar__btnTwo">
                            Sign Up
                        </button>
                        <button style={{
                            background: dark ? "#fff" : '',
                            backgroundColor: dark ? "transparent" : '',
                            filter: dark ? 'drop-shadow(1px 0.2px 4px #fff)' : ''
                         }} onClick={() => getDark(dark)} className="header--navBar__btnDark">
                            <CgDarkMode className="header--navBar__btnDark--dark"/>
                        </button>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;