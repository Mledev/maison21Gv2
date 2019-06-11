import React from 'react';
import logo from './assets/images/logo.svg';
import bgVideo from './assets/video/home.mp4';
import './assets/styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="bg-video-container">
          <video className="bg-video" autoPlay loop src={bgVideo}></video>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
