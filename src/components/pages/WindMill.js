import React, {Component} from 'react'
import '../../App.css'
//import './HydroPlant.css';
import {useEffect, useState} from 'react'
import axios from "axios";

class WindMill extends Component{
    constructor() {
            super();
            this.state = {
                plants: []
            };
        }
        
        
        componentDidMount = () => {
        
            console.log("hello!!")
            axios.get("http://localhost:8080/Hydro").then(response => {
                console.log(response)
                this.setState({
                    plants: response.data
                })
            });
        };

        loadData = (plantId) =>{

        }


        render(){
        return (
            <div>
                {this.state.plants.map((plant)=>{
                    return(
                        <button  >{plant.name}</button>
                    )
                })}
            </div>
        ); }
    
}

export default WindMill;