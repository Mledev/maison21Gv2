import React from 'react'
import facebook from '../assets/images/facebook.svg'
import instagram from '../assets/images/instagram.svg'
import twitter from '../assets/images/twitter.svg'

function Footer(){
    return(
        <div className="footer">
            <footer>
                <div className="rs">
                    <img src={facebook} alt="facebook"/>
                    <img src={twitter} alt="twitter"/>
                    <img src={instagram} alt="instagram"/>
                </div>
                <div className="link">
                    <a href="">SHOP</a>
                    <a href="">COMMUNITY</a>
                    <a href="">ABOUT US</a>
                </div>
                <p>TERMS & CONDITIONS - 2019 ⓒ 21g. ALL Rights Reserved</p>
            </footer>
        </div>
    )
}

export default Footer