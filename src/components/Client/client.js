import React from 'react';
import './client.scss';
import woman from "./../../assets/img/woman.svg"
import boy from "./../../assets/img/boy.svg"
import man from "./../../assets/img/man.svg"
import stars from "./../../assets/img/stars.svg"
const Client = ({dark}) => {
    return (
        <section id="client">
            <div className="container">
                <div className="client">
                    <h1 style={{
                        color: dark ? '#fff' : '',
                    }}>What Clients Say</h1>

                    <p style={{
                        color: dark ? '#fff' : '',
                    }}>Problems trying to resolve the conflict between <br/>
                        the two major realms of Classical physics:
                        Newtonian mechanics
                    </p>
                    <div className="client--block">
                        <div className="client--block__one">
                            <img src={stars} alt="img" className="images"/>
                            <p>Product helps you see how many <br/>
                                more days you need to work to <br/>
                                reach your financial goal.
                            </p>
                            <div className="client--block__one--woman">
                                <img src={woman} alt="img"/>
                                <h6>Wahid Ari <br/>
                                    <span>Designer</span>
                                </h6>
                            </div>
                        </div>
                        <div className="client--block__one">
                            <img src={stars} alt="img" className="images"/>
                            <p>Product helps you see how many <br/>
                                more days you need to work to <br/>
                                reach your financial goal.
                            </p>
                            <div className="client--block__one--woman">
                                <img src={boy} alt="img"/>
                                <h6>Wahid Ari <br/>
                                    <span>Designer</span>
                                </h6>
                            </div>
                        </div>
                        <div className="client--block__one">
                            <img src={stars} alt="img" className="images"/>
                            <p>Product helps you see how many <br/>
                                more days you need to work to <br/>
                                reach your financial goal.
                            </p>
                            <div className="client--block__one--woman">
                                <img src={man} alt="img"/>
                                <h6>Wahid Ari <br/>
                                    <span>Designer</span>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Client;