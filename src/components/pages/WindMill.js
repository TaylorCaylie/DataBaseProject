import React, {Component} from 'react'
import '../../App.css'
//import './HydroPlant.css';
import {useEffect, useState} from 'react'
import axios from "axios";

class WindMill extends Component{
    constructor() {
        //const[initialState,setInitialState] = useState([])

            super();
            this.state = {
                condition: []
            };
        }
        

        componentDidMount = () => {
            axios.get("http://localhost:8080/Wind").then(response => {

                this.setState({
                    condition: response
                })
               
            });
        };
        render(){
        return (

            
            <div>
                <link rel="stylesheet" type="text/css" href="WindMill.css"/>
                {/* <li class="button1" onclick="doCommand('bold');" id="bold-button" title="bold">B</li> */}
                <h1 class= "mainHydro">
               <p>
                WindMill Plants and Associated IDs: 
                </p>
                {this.state.condition.map(condition => <div>{condition.name}</div>)}
                </h1>
            </div>
        ); }
    
}

export default WindMill;