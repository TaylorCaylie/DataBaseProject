import React, { Component } from 'react'
import '../../App.css'
//import './HydroPlant.css';
import { useEffect, useState } from 'react'
import axios from "axios";
import Plant from './Plant';

class WindMill extends Component {
    constructor() {
        super()
    }


   

    render() {

        return (
            <Plant type = "Wind"></Plant>
        )

    }

}

export default WindMill;