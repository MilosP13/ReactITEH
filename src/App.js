import React from 'react';
import './App.css';
import Navigacioni from './komponente/Navigacioni';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './komponente/stranice/Home';
import Planets from './komponente/stranice/Planets'
import SignUp from './komponente/stranice/SignUp'
import BlueP from './komponente/stranice/BlueP';
import DustP from './komponente/stranice/DustP';
import IceP from './komponente/stranice/IceP';
import ToxicP from './komponente/stranice/ToxicP';
import MixP from './komponente/stranice/MixP';
import AboutUs from './komponente/AboutUs';
import Footer from './komponente/Footer';
import PlanetOfTheDay from './komponente/PlanetOfTheDay';


function App() {
  return (
    <>
      <Router>
        <Navigacioni/>

        <Switch>

         <Route path='/' exact component={Home} />
         <Route path='/planets' exact component={Planets} />
         <Route path='/sign-up' exact component={SignUp} />
         <Route path='/aboutus' component={AboutUs} />
         <Route path='/surprise' component={PlanetOfTheDay} />

        {/*  stranice */}
         <Route path='/blue' component={BlueP} />
         <Route path='/dust' component={DustP} />
         <Route path='/ice' component={IceP} />
         <Route path='/toxic' component={ToxicP} />
         <Route path='/mix' component={MixP} />
         

        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
