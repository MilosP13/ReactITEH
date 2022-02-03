import React from 'react';
import './App.css';
import Navigacioni from './komponente/Navigacioni';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './komponente/stranice/Home';
import Planets from './komponente/stranice/Planets'


function App() {
  return (
    <>
      <Router>
        <Navigacioni/>

        <Switch>

         <Route path='/' exact component={Home} />
         <Route path='/planets' exact component={Planets} />
        

        </Switch>


      </Router>
    </>
  );
}

export default App;
