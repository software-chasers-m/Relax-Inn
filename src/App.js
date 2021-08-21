import React, { Component } from 'react'
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUS from './components/ContactUs';
import AboutUs from './components/AboutUs';
import { withAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
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

      </div>
    )
  }
}

export default withAuth0(App);
