import React, {Component} from 'react'
import '../../App.css'
import './SolarPlant.css';
import {useEffect, useState} from 'react'
import axios from "axios";

class SolarPlant extends Component{
    constructor() {
        //const[initialState,setInitialState] = useState([])

            super();
            this.state = {
                condition: []
            };
        }
        

        componentDidMount = () => {
            axios.get("http://localhost:8080/Solar").then(response => {
                this.setState({
                    condition: response
                })
            });
        };
        render(){
        return (
            <div>
                <link rel="stylesheet" type="text/css" href="SolarPlant.css"/>
                <h1 class= "mainHydro">
                 {/* <form action="/submit-student-data" method="post">
                HydroPlant ID: <input name="firstName" type="text" /> <br />
                <input type="submit" />
                </form>  */}
                {/* <input name="Hydro" type="submit" value="Luminant Station"></input> */}
                <p>
                Solar Plants and Associated IDs:
                </p>
                {this.state.condition.map(condition => <div>{condition.name}</div>)}
                </h1>
            </div>
        ); }
    
}

export default SolarPlant;