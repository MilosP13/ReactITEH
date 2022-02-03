import React from 'react';
import './App.css';
import Navigacioni from './komponente/Navigacioni';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './komponente/stranice/Home';
import Planets from './komponente/stranice/Planets'
import SignUp from './komponente/stranice/SignUp'


function App() {
  return (
    <>
      <Router>
        <Navigacioni/>

        <Switch>

         <Route path='/' exact component={Home} />
         <Route path='/planets' exact component={Planets} />
         
         <Route path='/sign-up' exact component={SignUp} />


         
        

        </Switch>


      </Router>
    </>
  );
}

export default App;
