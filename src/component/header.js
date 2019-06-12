import React from 'react';
import logo from '../assets/images/logo.svg';

function Header(){
    return(
        <div className="header">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    )
}

export default Header