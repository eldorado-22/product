import React from 'react';
import woman from "./../../assets/img/woman.png";
import grandmother from "./../../assets/img/tetya.png";
import boy from "./../../assets/img/boy.png";
import uncle from "./../../assets/img/uncle.png";

const Process = ({dark}) => {
    return (
        <section id="process">
            <div className="container">
                <div className="process">
                    <center>
                        <h1 style={{
                            color: dark ? '#fff' : ''
                        }} >Quick & Easy Process</h1>
                        <p style={{
                            color: dark ? '#fff' : ''
                        }} >Do you require some help for your project: Conception workshop, <br/>
                            prototyping, marketing strategy, landing page, Ux/UI?
                        </p>
                    </center>
                   <div className="process--one">
                       <div className="process--one__woman">
                           <img src={woman} alt="img"/>
                           <button>I can take care of your pitch</button>
                       </div>
                       <div className="process--one__woman">
                           <img src={grandmother} alt="img"/>
                           <button>I can prototype your app</button>
                       </div>
                   </div>
                   <div className="process--two">
                       <div className="process--two__man">
                           <button>I can design you website</button>
                           <img src={boy} alt="img"/>
                       </div>
                       <div className="process--two__man">
                           <img src={uncle} alt="img"/>
                           <button>I can help marketing strategy</button>
                       </div>
                   </div>
                </div>
            </div>
        </section>
    );
};

export default Process;