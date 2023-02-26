import React from 'react';
import {AiFillCheckSquare} from "react-icons/ai";
import support from "./../../assets/img/sopport.png"

const Support = ({dark}) => {
    return (
        <section style={{
            background: dark ? '#02897A' : '',
            color: dark ? '#fff' : '',
        }}  id="support">
            <div className="container">
                <div className="support">
                    <img src={support} alt={support}/>
                    <div className="support--text">
                        <ul style={{
                            color: dark ? '#fff' : ''
                        }} >Easier decision making for</ul>
                        <h3 style={{
                            color: dark ? '#fff' : ''
                        }} >Customer Support</h3>
                        <p style={{
                            color: dark ? '#fff' : ''
                        }} >The Myspace page defines the individual,
                            his or her <br/>characteristics, traits,
                            personal choices and the overall <br/>
                            personality of the person.
                        </p>

                        <div className="support--text__icon">
                            <AiFillCheckSquare className="support--text__icon--orange"/>
                            <p style={{
                                color: dark ? '#fff' : ''
                            }} >Never worry about overpaying
                                for your <br/> energy again.
                            </p>
                        </div>

                        <div className="support--text__icon">
                            <AiFillCheckSquare className="support--text__icon--red"/>
                            <p style={{
                                color: dark ? '#fff' : ''
                            }} > We will only switch you to energy
                                companies <br/> that we trust and
                                will treat you right.
                            </p>
                        </div>

                        <div className="support--text__icon">
                            <AiFillCheckSquare className="support--text__icon--blue"/>
                            <p style={{
                                color: dark ? '#fff' : ''
                            }} > We track the markets daily know
                                where the <br/> savings are.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Support;