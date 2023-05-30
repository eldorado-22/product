import React from 'react';
import Slider from "react-slick";
import './../../styles/Contents/contents.scss';
import one from './../../assets/img/one.png';
import two from './../../assets/img/two.png';
import three from './../../assets/img/three.png';

const Contents = ({dark}) => {
    let settings = {
        dots: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        pauseOnHover: true,
    };
    return (

        <section id="content">
            <div className="container">
                <div className="content">
                    {/*<h1 style={{*/}
                    {/*    color: dark ? '#fff' : '',*/}
                    {/*}}>Contents Strategies</h1>*/}
                    {/*<p style={{*/}
                    {/*    color: dark ? '#fff' : '',*/}
                    {/*}}>We focus on ergonomics and meeting you where you work. It's only a keystroke away. </p>*/}
                    <div className="content--block">

                        {/*<Slider {...settings}>*/}
                        {/*    <div style={{width: "76%"}} className="content--block__one">*/}
                        {/*        <img src={one} alt="img"/>*/}
                        {/*        <h3>By <span>Wahid Ari | </span>  03 March 2019</h3>*/}
                        {/*        <h2>Increasing Prosperity <br/>*/}
                        {/*            With Positive Thinking*/}
                        {/*        </h2>*/}
                        {/*    </div>*/}

                        {/*    <div className="content--block__two">*/}
                        {/*        <img src={two} alt="img"/>*/}
                        {/*        <h3>By <span>Wahid Ari | </span>  03 March 2019</h3>*/}
                        {/*        <h2>Increasing Prosperity <br/>*/}
                        {/*            With Positive Thinking*/}
                        {/*        </h2>*/}
                        {/*    </div>*/}

                        {/*    <div className="content--block__three">*/}
                        {/*        <img src={three} alt="img"/>*/}
                        {/*        <h3>By <span>Wahid Ari | </span>  03 March 2019</h3>*/}
                        {/*        <h2>Increasing Prosperity <br/>*/}
                        {/*            With Positive Thinking*/}
                        {/*        </h2>*/}
                        {/*    </div>*/}
                        {/*</Slider>*/}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contents;