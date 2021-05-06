import React from 'react'
import '../../App.css'
//import './SolarPlant.css';
import {useEffect, useState} from 'react'

function SolarPlant(){
    
        const[initialState,setInitialState] = useState([])

        useEffect(()=>{
            fetch('/api/').then(res => {
                if(res.ok){
                    return res.json()
                }
            }).then(jsonResponse => setInitialState(jsonResponse))
        }, [])

       

        return(
        <div className='main_cont'>
           <input id="4" name="Solar" type="submit" value="Spencer Generating Station"></input>
           <input id="5" name="Solar" type="submit" value="Exelon Power Texas"></input>
           <input id="6" name="Solar" type="submit" value="River Bend Station"></input>
        </div>
        );
}

export default SolarPlant;