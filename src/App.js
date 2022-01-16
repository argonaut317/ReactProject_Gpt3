// rafce react component is created when we create that 

import {CTA,Navbar,Brand} from "./components";
import {Header,Footer,Blog,Features,Possibility,WhatGPT3} from "./components/containers";
import "./App.css";
const App = () => {

    return (
        <div>
            <div className='App'>
                <div className='gradient__bg'>
                    <Navbar/>
                    <Header/>



                </div>
                <Brand/>
                <WhatGPT3/>
                <Features/>
                <Possibility/>
                <CTA/>
                <Blog/>
                <Footer/>

            </div>
        </div>
    )
}

export default App
