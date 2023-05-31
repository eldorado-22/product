import React from 'react';
import "./style.scss";
import block from "./../../assets/img/block.png";

const Block = () => {
    return (
        <section id="join">
            <div className="container">
                <div className="join">
                  <div className="join--text">
                      <h2>Join 100 Compannies who boost their business with <br/>
                          Product
                      </h2>
                      <button>get this</button>
                  </div>
                    <img src={block} alt="img"/>
                </div>
            </div>
        </section>
    );
};

export default Block;