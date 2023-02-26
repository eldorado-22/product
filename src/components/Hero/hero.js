import React from 'react';
import {BsFillPlayFill} from "react-icons/bs";
import family from './../../assets/img/family.png'

const Hero = ({dark}) => {
    return (
        <section style={{
            background: dark ? 'rgba(36,100,88,0.95)' : '',
            color: dark ? '#fff' : '',

        }} id="hero">
            <div className="container">
                <div className="hero">
                    <div className="hero--text">
                        <h1 style={{
                            color: dark ? '#fff' : ''
                        }}>Work at the speed <br/>
                            of thought
                        </h1>
                        <p style={{
                            color: dark ? '#fff' : ''
                        }}>Tools, tutorials, design and innovation experts,
const Hero = () => {
    return (
        <section id="hero">
            <div className="container">
                <div className="hero">
                    <div className="hero--text">
                        <h1>Work at the speed <br/>
                            of thought
                        </h1>
                        <p>Tools, tutorials, design and innovation experts,
                            all <br/> in one place! The most intuitive way
                            to imagine <br/> your next user experience.
                        </p>
                        <div className="hero--text__btn">
                            <button style={{
                                background: dark ? '#fff' : '',
                                color: dark ? '#02897A' : ''
                            }}>Get Started
                            </button>
                            <a style={{
                                color: dark ? '#fff' : ''
                            }} href="https://www.youtube.com/watch?v=0s4lhbmO3IM"> <BsFillPlayFill
                                className="hero--text__btn--play"/> Watch the Video</a>
                            <button>Get Started</button>
                            <a href="https://www.youtube.com/watch?v=0s4lhbmO3IM"> <BsFillPlayFill className="hero--text__btn--play"/> Watch the Video</a>
                        </div>
                    </div>
                    <img src={family} alt={family}/>
                </div>
            </div>
        </section>
    );
};

export default Hero;