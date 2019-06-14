import React from 'react';
import video from '../assets/video/prez.mp4'

function FourthContent(){
    return(
        <div className="fourth-content">
            <div className="fourth-content-text">
                <h2>Je mixe mes fragrances</h2>
                <video className="video-react-video" loop preload="true" autoPlay src={video}></video>
            </div>
        </div>
    )
}

export default FourthContent