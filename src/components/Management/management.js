import React from 'react';
import management from './../../assets/img/management.png'

const Management = ({dark}) => {
    return (
        <section style={{
            background: dark ? 'rgba(36,100,88,0.95)' : '',
            color: dark ? '#fff' : ''
        }} id="management">
            <div className="container">
                <div className="management">
                    <div className="management--text">
                        <ul style={{
                            color: dark ? '#fff' : ''
                        }}>Effortless Validation for</ul>
                        <h2 style={{
                            color: dark ? '#fff' : ''
                        }}>Management</h2>
                        <p style={{
                            color: dark ? '#fff' : ''
                        }} className="management--text__para">The Myspace page defines the individual,
                            his or her <br/>characteristics, traits,
                            personal choices and the overall <br/>
                            personality of the person.
                        </p>

                        <ul style={{
                            color: dark ? '#fff' : ''
                        }} className="management--text__accessory">Accessory makers</ul>
                        <p style={{
                            color: dark ? '#fff' : ''
                        }}>While most people enjoy casino gambling,
                            sports betting, <br/>lottery and bingo
                            playing for the fun.
                        </p>

                        <ul style={{
                            color: dark ? '#fff' : ''
                        }} className="management--text__alter">Alterationists</ul>
                        <p style={{
                            color: dark ? '#fff' : ''
                        }} >If you are looking for a new way to
                            promote your business <br/> that
                            won’t cost you more money.
                        </p>
                    </div>
                    <img src={management} alt={management}/>
                </div>
            </div>
        </section>
    );
};

export default Management;