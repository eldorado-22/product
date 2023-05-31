import React from 'react';
import Hero from "../../components/Hero/hero";
import Product from "../../components/Product/product";
import Management from "../../components/Management/management";
import Support from "../../components/Support/support";
import For from "../../components/Collabration/for";
import Process from "../../components/Process/process";
import Contents from "../../components/Contents/contents";
import Prices from "../../components/Prices/prices";
import Client from "../../components/Client/client";
import Block from "../../components/Block/block";

const Index = ({dark, getDark}) => {
    return (
        <div style={{
            background: dark ? '#1F2E35' : '173A56',
            color: dark ? '#848a8d' : '#000'
        }}>
            <Hero getDark={getDark} dark={dark}/>
            <Product getDark={getDark} dark={dark}/>
            <Management getDark={getDark} dark={dark}/>
            <Support getDark={getDark} dark={dark}/>
            <For getDark={getDark} dark={dark}/>
            <Process getDark={getDark} dark={dark}/>
            <Contents getDark={getDark} dark={dark}/>
            <Prices getDark={getDark} dark={dark}/>
            <Client getDark={getDark} dark={dark}/>
            <Block getDark={getDark} dark={dark}/>
        </div>
    );
};

export default Index;