import './App.css';
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



function App() {
    return (
        <>
            <Header/>
            <Hero/>
            <Product/>
            <Management/>
            <Support/>
            <For/>
            <Process/>
            <Contents/>
            <Block/>
            <Footer/>
        </>
    );
}

export default App;
