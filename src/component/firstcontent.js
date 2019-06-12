import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import firstFlacon from '../assets/images/firstFlacon.png'

function FirstContent(){
    return(
        <div className="first-content">
            <div className="first-content-text">
                <h1>The scent of my soul</h1>
                <p>Maison 21G, Maison de parfumerie haut de gamme te propose de créer un parfum à ton image.<br/><br/>31 fragrances, 800 possibilités.</p>
                <button>RECEVOIR MES ÉCHANTILLONS</button>
                <Parallax x={[0, -60]} className="firstFlacon" tagOuter="figure">
                    <img src={firstFlacon} alt="firstFlacon"/>
                </Parallax>
            </div>
        </div>
    )    
}

export default FirstContent