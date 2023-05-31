import React, {useState} from 'react';
import Hero from "../Hero/hero";
import Product from "../Product/product";
import Management from "../Management/management";
import Support from "../Support/support";
import For from "../Collabration/for";
import Process from "../Process/process";
import Contents from "../Contents/contents";
import Prices from "../Prices/prices";
import Client from "../Client/client";
import Block from "../Block/block";

const Home = () => {
    const [dark, setDark] = useState(false)

    function getDark() {
        setDark(!dark)
    }
    return (
        <div style={{
            background: dark ? '#1F2E35' : '',
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

export default Home;