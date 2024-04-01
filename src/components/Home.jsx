import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Carousel from './Carousel';
import About from './About';


const Home = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Carousel></Carousel>
        <About></About>
        
        <Footer></Footer>
      
    </div>
  );
}

export default Home;
