import React, {Component} from 'react';
import video from '../assets/video/prez.mp4'
//import "node_modules/video-react/dist/video-react.css"; // import css
import { Player, ControlBar } from 'video-react';


class FourthContent extends Component{
    constructor(props){
        super(props)

        this.state = {
            video: null
        }
    }

    componentDidMount(){
        var media = document.getElementById("video");
        media.load();

        media.addEventListener('loadeddata', function() {
            media.play();
        });
    }

    render(){
        return(
            <div className="fourth-content">
                <div className="fourth-content-text">
                    <h2>Je mixe mes fragrances</h2>
                    <video id="video" className="video-react-video" muted loop preload="auto" src={video}></video>
                </div>
            </div>
        )
    }
}

export default FourthContent