import React, { useState } from 'react'
import '../App.css';
import './Main.css';
import {Link} from 'react-router-dom';

function Main() {
    const [click, setClick] = useState(false);
   

    return (
        <div className='main-container'>
            <video src="/videos/theone.mp4" autoPlay loop muted />
            
            <h1><Link to="/" className = "navbar-logo">
                GREEN TEXAS <i className='fab fa-pagelines'/>
            </Link></h1>
            <p>Sustainable Energy for an Attainable Future</p>
            
            <div className='main-btns'>
                
                <Link  to= "/products" >
                <button class="btns" type="btns" name="btns"
                
                // style = "background-color: transparent"
                // >Button
                // size = 'btn--large'
                >
                    WIND PLANTS
                </button>
                </Link>
                <Link to="/services">
                <button class='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                    SOLAR PLANTS
                </button>
                </Link>
                <Link to="/sign-up">
                <button 
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                    HYDRO PLANTS
                </button>
                </Link>
            </div>
        </div>
    );
}

export default Main

