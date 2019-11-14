import React from 'react';
import './App.css';
import RecipeSearcher from './RecipeSearcher/RecipeSearcher';
import About from './About/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


function App() {
  
  return (
    <Router>
      <nav id='Navbar'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>

          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>

      {/* The Switch component looks through the Route componenets inside of it 
      and renders the first one that matches the current URL */}
      <Switch>
        <Route  exact path='/'>
          <RecipeSearcher />
        </Route>

        <Route path='/about'>
          <About />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
