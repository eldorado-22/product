import React from 'react';
import "./style.scss";

const ChooseProduct = ({dark}) => {
    return (
        <section id="choose">
            <div className="container">
                <div className="choose">
                    <h1 style={{
                        color: dark ? '#fff' : '',
                    }}>Why Choose Product?</h1>
                </div>
            </div>
        </section>
    );
};

export default ChooseProduct;