import React from 'react'
import '../../App.css'
//import './WindMill.css';
import {useEffect, useState} from 'react'

function WindMill(){
    
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
            <h2 class="head">
            {/* <form action="/submit-student-data" method="post">
            HydroPlant ID: <input name="firstName" type="text" /> <br />
            <input type="submit" />
            </form> */}
           <input id="7" name="Hydro" type="submit" value="Exelon Power Texas"></input>
           <input id="8" name="Hydro" type="submit" value="AZZ Wind"></input>
           <input id="9" name="Hydro" type="submit" value="Panda Power Plant"></input>
           </h2>
        </div>
        );
}

export default WindMill;