import React, {Component} from 'react';

class Color extends Component{
    constructor(props){
        super(props)

        this.state = {
            instaToken : localStorage.getItem('instaToken'),
            instaUrl : `https://api.instagram.com/v1/users/self/media/recent/?access_token=__ACCESSTOKEN__`,
            imgUrl : []
        }
    }

    componentDidMount(){
        let {instaToken, instaUrl, imgUrl} = this.state
        instaUrl = instaUrl.replace('__ACCESSTOKEN__',instaToken)

        var myHeaders = new Headers();

        myHeaders.append("Content-Type", "application/json");
        myHeaders.append('Access-Control-Allow-Headers', "X-Custom-Header")

        var myInit = { method: 'GET',
                    headers: myHeaders,
                    mode: 'cors',
                    cache: 'default' };

        var myRequest = new Request(instaUrl,myInit);

        fetch(myRequest, myInit).then(
            function(response){
                console.log(response)
            }
        ).then(
            function(response){
                console.log(response)
            }
        )

    }

    render(){


        return(
            <p>Votre parfum est: </p>
        )
    }
}

export default Color