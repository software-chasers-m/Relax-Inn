import React, { Component } from 'react'
import ContactUS from './components/ContactUs';
import AboutUs from './components/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import { withAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header /> 
        <Home />
        <Router>
          <Switch>
            <Route path="/about">
              <AboutUs />
            </Route>
            <Route path="/contact-us">
              <ContactUS />
            </Route>
          </Switch>
        </Router>
       {/* Home */}
           
              {/* Banner */}
              {/* Search */}
              {/* Cards */}
          {/* Footer */}
          {/* SearchPage */}
      </div>
    )
  }
}
export default withAuth0(App);

