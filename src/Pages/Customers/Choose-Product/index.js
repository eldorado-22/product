import React from 'react';
import "./style.scss";
import {FaMousePointer} from "react-icons/fa";
import {MdOutlineSwapCalls} from "react-icons/md";
import {IoHeartSharp} from "react-icons/io5";

const ChooseProduct = ({dark}) => {
    return (
        <section id="choose">
            <div className="container">
                <div className="choose">
                    <h1 style={{
                        color: dark ? '#fff' : '',
                    }}>Why Choose Product?</h1>
                    <center>
                        <div className="choose--group flex justify-between items-center py-10">
                            <div className="choose--group__one">
                                <FaMousePointer className="choose--group__one--icon"/>
                                <p style={{
                                    color: dark ? '#fff' : ''
                                }}>Special Business</p>
                                <span style={{
                                    color: dark ? '#fff' : ''
                                }}>Product helps you see how many <br/>
                                more days you need to work <br/>
                                to reach your financial goal <br/>
                                for the month and year.
                            </span>
                            </div>
                            <div className="choose--group__two">
                                <MdOutlineSwapCalls className="choose--group__two--icon"/>
                                <p style={{
                                    color: dark ? '#fff' : ''
                                }}>Instant Result</p>
                                <span style={{
                                    color: dark ? '#fff' : ''
                                }}>Product helps you see how many <br/>
                                more days you need to work <br/>
                                to reach your financial goal <br/>
                                for the month and year.
                            </span>
                            </div>
                            <div className="choose--group__three">
                                <IoHeartSharp className="choose--group__three--icon"/>
                                <p style={{
                                    color: dark ? '#fff' : ''
                                }}>Special Business</p>
                                <span style={{
                                    color: dark ? '#fff' : ''
                                }}>Product helps you see how many <br/>
                                more days you need to work <br/>
                                to reach your financial goal <br/>
                                for the month and year.
                            </span>
                            </div>
                        </div>
                    </center>
                </div>
            </div>
        </section>
    );
};

export default ChooseProduct;