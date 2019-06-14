import React from 'react';
import troisParfums from '../assets/images/troisparfums.png'

function Step(){
    return(
        <div className="step">
            <h2>Un test personnalisé</h2>
            
            <div className="step-container">
                <div className="step-block">
                    <h3>1</h3>
                    <p>Tu connectes ton feed</p>
                </div>

                <div className="step-block">
                    <h3>2</h3>
                    <p>Notre analyste parfumeur décrypte ta personnalité</p>
                </div>

                <div className="step-block">
                    <h3>3</h3>
                    <p>Tu découvres trois parfums à ton image</p>
                </div>
            </div>

            <p className="last">Un parfum pour chaque occassion</p>

            <img src={troisParfums} alt='troisParfums' />
        </div>
    )
}

export default Step