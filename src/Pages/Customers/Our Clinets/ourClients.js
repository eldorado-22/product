import React from 'react';
import "./style.scss";
import airbnb from "./../../../assets/img/airbnb.svg"
import google from "./../../../assets/img/google.svg"
import microsoft from "./../../../assets/img/microsoft.svg"
import fedex from "./../../../assets/img/fedEx.svg"

const OurClients = ({dark}) => {
    return (
        <section id="ourClients" className="py-24">
            <div className="container">
                <div className="ourClients ">
                    <h1 style={{
                        color: dark ? '#fff' : '',
                    }}>Our Clients</h1>
                    <div className="ourClients--images  grid grid-flow-col gap-20 p-10">
                        <img src={airbnb} alt="img"/>
                        <img src={google} alt="img"/>
                        <img src={microsoft} alt="img"/>
                        <img src={fedex} alt="img"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurClients;