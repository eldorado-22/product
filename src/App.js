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
import Client from "./components/Client/client";
import Prices from "./components/Prices/prices";
import {Route, Routes} from "react-router-dom";
import ProductPage from "./Pages/Product-Page";
import Products from "./Pages/Product-Page/Products-IN/products";
import Index from "./Pages/Product-Page";
import ThirdPages from "./Pages/Customers";
import Home from "./components/Home";


function App() {

    const [dark, setDark] = useState(false)

    function getDark() {
        setDark(!dark)
    }

    return (
        <div style={{
            background: dark ? '#1F2E35' : '',
            color: dark ? '#848a8d' : '#000'
        }}>
            <Header getDark={getDark} dark={dark}/>
            <Routes>
                <Route path="/" element={<Home/>} getDark={getDark} dark={dark}/>/>
                <Route path="/product" element={<Index/>} getDark={getDark} dark={dark}/>/>
                <Route path="/customers" element={<ThirdPages/>} getDark={getDark} dark={dark}/>/>
            </Routes>
            <Footer getDark={getDark} dark={dark}/>
        </div>
    );
}

export default App;
