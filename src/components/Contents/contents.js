import React from 'react';
import './../../styles/Contents/contents.scss';
import one from './../../assets/img/one.png';
import two from './../../assets/img/two.png';
import three from './../../assets/img/three.png';

const Contents = ({dark}) => {

    return (

        <section id="content">
            <div className="container">
                <div className="content">
                    <h1 style={{
                        color: dark ? '#fff' : '',
                    }}>Contents Strategies</h1>
                    <p style={{
                        color: dark ? '#fff' : '',
                    }}> We focus on ergonomics and meeting you where you work. It's only a keystroke away. </p>
                    <div className="content--block">
                            <div className="content--block__one">
                                <img src={one} alt="img"/>
                                <h3 style={{
                                    color: dark ? '#fff' : '',
                                }}>By <span>Wahid Ari | </span>  03 March 2019</h3>
                                <h2 >Increasing Prosperity <br/>
                                    With Positive Thinking
                                </h2>
                            </div>
                            <div className="content--block__one">
                                <img src={two} alt="img"/>
                                <h3 style={{
                                    color: dark ? '#fff' : '',
                                }}>By <span>Wahid Ari | </span>  03 March 2019</h3>
                                <h2>Increasing Prosperity <br/>
                                    With Positive Thinking
                                </h2>
                            </div>
                            <div className="content--block__one">
                                <img src={three} alt="img"/>
                                <h3 style={{
                                    color: dark ? '#fff' : '',
                                }}>By <span>Wahid Ari | </span>  03 March 2019</h3>
                                <h2>Increasing Prosperity <br/>
                                    With Positive Thinking
                                </h2>
                            </div>
                        <div className="content--block__one">
                            <img src={one} alt="img"/>
                            <h3>By <span>Wahid Ari | </span> 03 March 2019</h3>
                            <h2>Increasing Prosperity <br/>
                                With Positive Thinking
                            </h2>
                        </div>
                        <div className="content--block__one">
                            <img src={two} alt="img"/>
                            <h3>By <span>Wahid Ari | </span> 03 March 2019</h3>
                            <h2>Increasing Prosperity <br/>
                                With Positive Thinking
                            </h2>
                        </div>
                        <div className="content--block__one">
                            <img src={three} alt="img"/>
                            <h3>By <span>Wahid Ari | </span> 03 March 2019</h3>
                            <h2>Increasing Prosperity <br/>
                                With Positive Thinking
                            </h2>
                        </div>
                    </div>
                    <div className="content--group">
                        <div className="content--group__circle"></div>
                        <div className="content--group__green"></div>
                        <div className="content--group__circle"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contents;