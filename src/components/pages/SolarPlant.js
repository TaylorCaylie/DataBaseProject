import React, { Component } from 'react'
import '../../App.css'
//import './HydroPlant.css';
import { useEffect, useState } from 'react'
import axios from "axios";
import Plant from './Plant';

class SolarPlant extends Component {
    constructor() {
        super()
    }


   

    render() {

        return <Plant type ="Solar" ></Plant>

    }

}

export default SolarPlant;