import React from 'react';
// import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Main from './components/Main'
import WindMill from './components/pages/WindMill';
import HydroPlant from './components/pages/HydroPlant';
import SolarPlant from './components/pages/SolarPlant';
function App() {
    return ( 
        <>
        <Router>
            <Main />
            <Switch>
               <Route path='/' exact component={Home} />
               <Route path='/products' component={WindMill} />
               <Route path='/sign-up' component={HydroPlant} />
               <Route path='/services' component={SolarPlant} />
            </Switch>
        </Router>    
        </>
    );
}

export default App;