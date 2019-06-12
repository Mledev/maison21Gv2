import React, {Component} from 'react';

class Insta extends Component{
    constructor(props){
        super(props)

        this.state = {
            instaToken : null,
        }
    }

    componentDidMount(){
        let {instaToken} = this.state
        let url = window.location
        let token = null
        console.log(url)

        if(!instaToken){
            if(localStorage.getItem('instaToken')){
                token = localStorage.getItem('instaToken')
            }else{
                token = url.hash.replace(/^#access_token=/, '');
                localStorage.setItem('instaToken', token)
            }
        }

        this.setState({
            instaToken : token,
        })
    }

    render(){
        const {instaToken} = this.state

        if(instaToken){
            return(
                <div className="Insta">

                </div>
            )
        }else{
            return(
                <div className="Insta">
                    <p>{instaToken}</p>
                    <a href="https://www.instagram.com/oauth/authorize/?client_id=f082e0c8ac7a41feaa0162bb86f7f78d&redirect_uri=http://matthieuledevehat.localhost:3000&response_type=token">Login to instagram</a>
                </div>
            )
        }
    }
}

export default Insta;
