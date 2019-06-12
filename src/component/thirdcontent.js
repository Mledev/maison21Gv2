import React from 'react';
import fille from '../assets/images/fille.png'

function ThirdContent(){
    return(
        <div className="third-content">
            <div className="third-content-text">
                <h2>Je crée ma formule</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis magna eu leo consequat egestas nec non enim. Cras feugiat ut augue sit amet scelerisque. Ut dolor ante, semper vel lectus id, bibendum placerat ex. Nulla mauris erat, tempor non arcu ut, cursus viverra quam.</p>
                <button>EN SAVOIR PLUS</button>
                <img src={fille} alt="fille"/>
            </div>
        </div>
    )
}

export default ThirdContent