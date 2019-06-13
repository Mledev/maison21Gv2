import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import phone from '../assets/images/phone.png'

function SecondContent(){
    return(
        <div className="second-content">
            <div className="second-content-text">
                <h2>Instagr’âme</h2>
                <p>La Maison 21G révolutionne la façon de choisir ton parfum… Ton Instagram reflète ta personnalité, nous la métamorphosons en parfum. 
                    <br/><br/>Laisse toi envouter par une expérience olfactive, à ton image.
                </p>
                <button>SCANNER MON INSTA</button>
                <Parallax x={[-60, -40]} className="phone" tagOuter="figure">
                    <img src={phone} alt="phone"/>
                </Parallax>
            </div>
        </div>
    )    
}

export default SecondContent