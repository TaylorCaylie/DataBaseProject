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
                condition: "Not yet received"
            };
        }
        

        componentDidMount = () => {
            axios.get("/Wind").then(response => {

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
                 {/* <form action="/submit-student-data" method="post">
                HydroPlant ID: <input name="firstName" type="text" /> <br />
                <input type="submit" />
                </form>  */}
                {/* <input name="Hydro" type="submit" value="Luminant Station"></input> */}
                WindMill Plants and Associated IDs: {this.state.condition}
                </h1>
            </div>
        ); }
    
}

export default WindMill;