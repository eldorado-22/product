import React from 'react';
import image from '../../assets/img/amico.svg'

const For = ({dark}) => {
    return (
        <section id="for">
            <div className="container">
                <div className="for">

                    <div className="for--title">
                        <span style={{
                            color: dark ? '#fff' : ''
                        }}>Optimisation for</span>
                        <h3 style={{
                            color: dark ? '#fff' : ''
                        }}>Collaborative</h3>
                        <p style={{
                            color: dark ? '#fff' : ''
                        }}>Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior. </p>
                        <h5 style={{
                            color: dark ? '#fff' : ''
                        }}>Accessory makers</h5>
                        <p style={{
                            color: dark ? '#fff' : ''
                        }}>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun</p>
                        <h5 style={{
                            color: dark ? '#fff' : ''
                        }}>Alterationists</h5>
                        <p style={{
                            color: dark ? '#fff' : ''
                        }}>If you are looking for a new way to promote your business that won’t cost you more money,</p>
                    </div>

                    <div className="for--image">
                        <img src={image} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default For;