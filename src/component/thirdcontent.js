import React from 'react';
import fille from '../assets/images/fille.png'

function ThirdContent(){
    return(
        <div className="third-content">
            <div className="third-content-text">
                <h2>Je crée ma formule</h2>
                <p>Nos nez ont sélectionné un ensemble de 33 senteurs. Combinées, elles représentent ta personnalité. 
                    <br/><br/>Ta singularité se dégagera en mixant les 800 possibilités de parfums.</p>
                <button>EN SAVOIR PLUS</button>
                <img src={fille} alt="fille"/>
            </div>
        </div>
    )
}

export default ThirdContent