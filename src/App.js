import React from 'react';
import './style/style.scss';

import Nav from './components/Nav';
import Main from './components/Main';
import Features from './components/Features'
import Cards from './components/Cards';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
    return (
        <div className='container'>
        <Nav/>
        <Main/>
        <Features/>
        <Cards/>
        <Faq/>
        <Contact/>
        <Footer/>
        </div>
    )
}

export default App;