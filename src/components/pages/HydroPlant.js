import React, { Component } from 'react'
import '../../App.css'

import Plant from './Plant';

class HydroPlant extends Component {
    constructor() {
        super()
    }

    render() {

        return <Plant type = "Hydro" ></Plant>

    }

}

export default HydroPlant;