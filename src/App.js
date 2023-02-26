import './App.css';
import './styles/styles.scss'
import Hero from "./components/Hero/hero";
import Header from "./components/Header/header";
import Product from "./components/Product/product";
import Management from "./components/Management/management";
import Support from "./components/Support/support";
import For from "./components/Collabration/for";
import Process from "./components/Process/process";
import Contents from "./components/Contents/contents";
import Block from "./components/Block/block";
import Footer from "./components/Footer/footer";
import {useState} from "react";


function App() {

    const [dark, setDark] = useState(false)

    function getDark() {
        setDark(!dark)
    }

    return (
        <div style={{
            background: dark ? 'rgba(36,100,88,0.95)' : '',
            color: dark ? '#02223b' : '#000'
        }}>
            <Header getDark={getDark} dark={dark}/>
            <Hero getDark={getDark} dark={dark}/>
            <Product/>
            <Management/>
            <Support/>
            <For/>
            <Process/>
            <Contents/>
            <Block/>
            <Footer/>
        </div>
    );
}

export default App;
