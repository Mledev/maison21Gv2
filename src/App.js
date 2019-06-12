import React from 'react';
import './assets/styles/App.css';
import Header from './component/header';
import FirstContent from './component/firstcontent';
import SecondContent from './component/secondcontent';
import ThirdContent from './component/thirdcontent';
import Step from './component/step';
import FourthContent from './component/fourthcontent';
import FivthContent from './component/fivthcontent';
import Footer from './component/footer';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
    <div className="App">
      <Header></Header>
      <FirstContent></FirstContent>
      <SecondContent></SecondContent>
      <Step></Step>
      <ThirdContent></ThirdContent>
      <FourthContent></FourthContent>
      <FivthContent></FivthContent>
      <Footer></Footer>
    </div>
    </ParallaxProvider>
  );
}

export default App;
