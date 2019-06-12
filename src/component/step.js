import React from 'react';
import troisParfums from '../assets/images/troisparfums.png'

function Step(){
    return(
        <div className="step">
            <h2>Un test personnalisé</h2>

            <div className="">
                <h3>1</h3>
                <p>Tu connectes ton feed</p>
            </div>

            <div className="">
                <h3>2</h3>
                <p>Notre analyste parfumeur décrypte ta personnalité</p>
            </div>

            <div className="">
                <h3>3</h3>
                <p>Tu découvre trois parfums à ton image</p>
            </div>

            <p className="last">Un parfum pour chaque occassion</p>

            <img src={troisParfums} alt='troisParfums' />
        </div>
    )
}

export default Step