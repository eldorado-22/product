import React, {useEffect, useState} from 'react';
import product from './../../assets/img/product.svg'
import {CgDarkMode} from "react-icons/cg";

const Header = ({getDark, dark}) => {

    const [signIn, setSignIn] = useState(false)
    const [signUp, setSignUp] = useState(false)

    return (
        <header id="header" style={{
            background:  dark ? 'rgba(36,100,88,0.95)' : '',
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
                        }} onClick={() => setSignIn(true)} className="header--navBar__btnOne">Sign In
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
                        }} onClick={() => getDark(dark)} className="header--navBar__btnDark"><CgDarkMode className="header--navBar__btnDark--dark"/></button>
                    </div>

                    <div style={{display: signIn === true ? "block" : "none"}}
                        className="header--signIn w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <form className="space-y-6" action="#">
                            <div className="header--signIn__esc">
                                <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                                    Sign in to our platform
                                </h5>
                                <button onClick={() => setSignIn(false)}>&times;</button>
                            </div>
                            <div >
                                <label htmlFor="email"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                    email
                                </label>
                                <input type="email" name="email" id="email"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                       placeholder="name@company.com" required/>
                            </div>
                            <div>
                                <label htmlFor="password"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                    password
                                </label>
                                <input type="password" name="password" id="password" placeholder="••••••••"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                       required
                                />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" type="checkbox" value=""
                                               className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                               required
                                        />
                                    </div>
                                    <label htmlFor="remember"
                                           className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#"
                                   className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost
                                    Password?</a>
                            </div>
                            <button type="submit"
                                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login
                                to your account
                            </button>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                Not registered?
                                <a href="#"
                                   className="text-blue-700 hover:underline dark:text-blue-500">
                                    Create account
                                </a>
                            </div>
                        </form>
                    </div>


                </div>
            </div>
        </header>
    );
};

export default Header;