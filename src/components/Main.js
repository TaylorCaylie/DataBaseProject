import React from 'react'
import '../App.css';
import { Button } from './Button';
import './Main.css';
import {Link} from 'react-router-dom';

function Main() {
    return (
        <div className='main-container'>
            <video src="/videos/theone.mp4" autoPlay loop muted />
            
            <h1><Link to="/" className = "navbar-logo">
                GREEN TEXAS <i className='fab fa-pagelines'/>
            </Link></h1>
            <p>Sustainable Energy for an Attainable Future</p>
            <div className='main-btns'>
                <Button 
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                    WIND PLANTS
                </Button>
                <Button 
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                    SOLAR PLANTS
                </Button>
                <Button 
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                    HYDRO PLANTS
                </Button>
            </div>
        </div>
    );
}

export default Main

