import React from 'react';
import {FaMousePointer} from "react-icons/fa";
import {MdOutlineSwapCalls} from "react-icons/md";
import {IoHeartSharp} from "react-icons/io5";
import {CgSandClock} from "react-icons/cg";

const Product = ({dark}) => {
    return (
        <section style={{
            background: dark ? '#02897' : '',
            color: dark ? '#ffffff' : '',
        }} id="product">
            <div className="container">
                <div className="product">
                    <h1 style={{
                        color: dark ? '#fff' : ''
                    }}>Product was Built Specifically
                        for <br/> You</h1>
                    <div className="product--sign">
                        <div className="product--sign__one">
                            <FaMousePointer className="product--sign__one--icon"/>
                            <p style={{
                                color: dark ? '#fff' : ''
                            }}>First click tests</p>
                            <span style={{
                                color: dark ? '#fff' : ''
                            }}>While most people enjoy <br/> casino gambling,</span>
                        </div>
                        <div className="product--sign__two">
                            <MdOutlineSwapCalls className="product--sign__two--icon"/>
                            <p style={{
                                color: dark ? '#fff' : ''
                            }}>Design surveys</p>
                            <span style={{
                                color: dark ? '#fff' : ''
                            }}>Sports betting, lottery and <br/> bingo playing for the fun</span>
                        </div>
                        <div className="product--sign__three">
                            <IoHeartSharp className="product--sign__three--icon"/>
                            <p style={{
                                color: dark ? '#fff' : ''
                            }}>Preference tests</p>
                            <span style={{
                                color: dark ? '#fff' : ''
                            }}>The Myspace page defines <br/> the individual.</span>
                        </div>
                        <div className="product--sign__end">
                            <CgSandClock className="product--sign__end--icon"/>
                            <p style={{
                                color: dark ? '#fff' : ''
                            }}>Five second tests</p>
                            <span style={{
                                color: dark ? '#fff' : ''
                            }}>Personal choices and the <br/> overall personality of the <br/> person. </span>
                        </div>
                    </div>
                    <div className="product--btn">
                        <button style={{
                            background: dark ? "#fff" : '',
                            backgroundColor: dark ? "#ffffff" : '',
                            color: dark ? "#22343D" : '',
                            border: dark ? "none" : '',
                            filter: dark ? 'drop-shadow(1px 0.2px 4px #fff)' : ''
                        }}>SIGN UP NOW
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;