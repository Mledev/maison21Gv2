import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import flacon from '../assets/images/flacon.png'
import capsule from '../assets/images/capsule.png'
import mandarine from '../assets/images/mandarine.png'
import lavande from '../assets/images/lavande.png'

function FivthContent(){
    return(
        <div className="fivth-content">
            <div className="fivth-content-text">
                <h2>Mes 800 combinaisons</h2>
                <img src={flacon} className="flacon" alt="flacon"/>
                <img src={capsule} className="capsule" alt="capsule"/>
                <Parallax x={['100%', '0%']} className="mandarine" tagOuter="figure">
                    <img src={mandarine} alt="capsule"/>
                </Parallax>
                <Parallax x={['-100%','-20%']} className="lavande" tagOuter="figure">
                    <img src={lavande} alt="capsule"/>
                </Parallax>
            </div>
            <p>Nos 33 essences naturelles sont issues de l’agriculture biologique. Des essences élaborées et choisies  par nos experts qui peuvent se combiner et ainsi créer jusqu’à 800 parfums différents.</p>
            <button>EN SAVOIR PLUS</button>
        </div>
    )
}

export default FivthContent