import React from 'react'
import '../../App.css'
import './HydroPlant.css';
import {useEffect, useState} from 'react'

function HydroPlant(){
    
        const[initialState,setInitialState] = useState([])

        useEffect(()=>{
            fetch('/clicked').then(res => {
                if(res.ok){
                    return res.json()
                }
            }).then(jsonResponse => setInitialState(jsonResponse))
        }, [])

       

        return(
        <div>
            <link rel="stylesheet" type="text/css" href="HydroPlant.css"/>
            <h2 class= "mainHydro">
            {/* <form action="/submit-student-data" method="post">
            HydroPlant ID: <input name="firstName" type="text" /> <br />
            <input type="submit" />
            </form> */}
           <input id="1" name="Hydro" type="submit" value="Luminant Station"></input>
           </h2>
           <h2 class= "mainHydro">
           <input id="2" name="Hydro" type="submit" value="Leeward Renewable Energy"></input>
           </h2>
           <h2 class= "mainHydro">
           <input id="3" name="Hydro" type="submit" value="Denison Dam Hydroelectric Power Plant"></input>
           </h2>
        </div>
        );
}

export default HydroPlant;