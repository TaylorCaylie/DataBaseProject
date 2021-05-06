import React, { Component } from 'react'
import '../../App.css'
//import './HydroPlant.css';
import { useEffect, useState } from 'react'
import axios from "axios";

class Plant extends Component {
    constructor(props) {

        super(props);

        this.type = props.type

        this.state = {
            plants: [],

            mode: "plants",

            data:[]
        };
    }


    componentDidMount = () => {

        console.log("hello!!")
        axios.get(`http://localhost:8080/${this.type}`).then(response => {
            console.log(response)
            this.setState({
                plants: response.data
            })
        });
    };

    loadData = (plantId) => {
        console.log(plantId)
        axios.get(`http://localhost:8080/Graphs/${plantId}`).then(response => {
            console.log(response)
            this.setState({
                data : response.data,
                mode : "data"
            })
        });


    }


    render() {

        if (this.state.mode == "plants") {

            return (
                <div>
                    {this.state.plants.map((plant) => {
                        return (
                            <button onClick = 
                            {this.loadData.bind(this,plant.plant_id)} >
                                {plant.name}
                            </button>
                        )
                    })});
                </div>
                )

            }else{

                return (
                <div>
                    {this.state.data.energy.map((d)=>{
                        return (
                            <div style = {{fontFamily : "-moz-initial"}} >
                                {d.kilowatts_produced + " produced kw on " + d.date}
                            </div>
                        )
                    })}
                </div>
                )
            }

    }

}

export default Plant;