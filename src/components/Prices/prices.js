import React from 'react';
import "./price.scss";
import zero from "./../../assets/img/zero.png"
import five from "./../../assets/img/five.png"
import ten from "./../../assets/img/ten.png"

const Prices = ({dark}) => {
    return (
        <section id="price">
            <div className="container">
                <div className="price">
                    <center>
                        <h1 style={{
                            color: dark ? '#fff' : '',
                        }}>Price Table</h1>
                        <p style={{
                            color: dark ? '#fff' : '',
                        }}>We offer competitive price</p>
                    </center>
                    <div className="price--block">
                        <div className="price--block__one">
                            <center>
                                <h3>Free</h3>
                                <p>Brief price description</p>
                                <img src={zero} alt="img"/>
                                <p>Only 2 Operators</p>
                                <p>Notifications</p>
                                <p>Landing Pages</p>
                                <button>Order Now</button>
                            </center>
                        </div>
                        <div className="price--block__two">
                            <center>
                                <h3>Free</h3>
                                <p>Brief price description</p>
                                <img src={five} alt=""/>
                                <p>Only 2 Operators</p>
                                <p>Notifications</p>
                                <p>Landing Pages</p>
                                <button>Order Now</button>
                            </center>
                        </div>
                        <div className="price--block__one">
                            <center>
                                <h3>Free</h3>
                                <p>Brief price description</p>
                                <img src={ten} alt="img"/>
                                <p>Only 2 Operators</p>
                                <p>Notifications</p>
                                <p>Landing Pages</p>
                                <button>Order Now</button>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Prices;