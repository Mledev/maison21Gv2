import React, {Component} from 'react';
import video from '../assets/video/prez.mp4'

class FourthContent extends Component{
    constructor(props){
        super(props)

        this.state = {
        }
    }

    componentDidMount(){
        document.querySelector('video').play();
    }

    render(){
        return(
            <div className="fourth-content">
                <div className="fourth-content-text">
                    <h2>Je mixe mes fragrances</h2>
                    <video className="video-react-video" loop preload="auto" autoPlay src={video}></video>
                </div>
            </div>
        )
    }
}

export default FourthContent