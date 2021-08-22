import React, { Component } from 'react'
import ContactUS from './components/ContactUs';
import Hotels from './components/Hotels';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rooms from './components/Rooms';
import Home from './components/Home';
import { withAuth0 } from '@auth0/auth0-react';
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import logo from './assets/logo5.png';
import {
  Navbar,
  Container,
  Nav,
} from "react-bootstrap";
import "./components/Header.css";
const accessToken = process.env.REACT_APP_LOCATIONIQ;

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelsData: [],
      roomsData: [],
      checkIn: '',
      checkOut: ''
    }
  }
  handleFormData = (e) => {
    e.preventDefault()
    let location = e.target.location.value;
    let checkIn = e.target.checkin.value;
    let checkOut = e.target.checkout.value;
    let sort = e.target.sort.value;
    this.setState({
      checkIn: checkIn,
      checkOut: checkOut
    })
    console.log(sort);
    let urlLocation = `https://eu1.locationiq.com/v1/search.php?key=${accessToken}&q=${location}&format=json`
    axios.get(urlLocation).then(res => {
      console.log(res.data[0].lat, res.data[0].lon);
      let lat = res.data[0].lat;
      let lon = res.data[0].lon;
      let config = {
        method: 'get',
        baseURL: "http://localhost:8000",
        url: '/hotelName',
        params: {
          lat: lat,
          lon: lon,
          checkIn: checkIn,
          checkOut: checkOut,
          sortOrder: sort
        }
      }
      axios(config).then(response => {
        this.setState({
          hotelsData: response.data,
        })
        console.log(this.state.hotelsData);
      })
    })
  }

  handleRoomsData = (e) => {
    let id = e.target.id;
    let config = {
      method: 'get',
      baseURL: "http://localhost:8000",
      url: '/rooms',
      params: {
        id: id,
        checkIn: this.state.checkIn,
        checkOut: this.state.checkOut,
      }
    }
    axios(config).then(response => {
      this.setState({
        roomsData: response.data,
      })
      console.log(this.state.roomsData);
    })
  }

  render() {
    return (
      <>
        <Router>
          <Navbar style={{ backgroundColor: ' rgb(191 130 131 / 34%)' }} expand="lg">
            <Container>
              <Navbar.Brand href="#"> <img src={logo} alt="" style={{ width: '120px', height: '50px' }} /></Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="mr-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/AboutUs">
                    <Nav.Link>About</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/Hotels">
                    <Nav.Link>Hotels</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/Rooms">
                    <Nav.Link>Rooms</Nav.Link>
                  </LinkContainer>
                </Nav>
                <Nav className="form-part">
                  {
                    this.props.auth0.isAuthenticated ?
                      <Logout /> :
                      <Login />
                  }
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Switch>
            {this.state.hotelsData &&
              <Route path="/Hotels">
                <Hotels hotelsData={this.state.hotelsData} handleRoomsData={this.handleRoomsData} />
              </Route>
            }
            {this.state.roomsData &&
              <Route path="/Rooms">
                <Rooms hotelsData={this.state.hotelsData} />
              </Route>
            }
            <Route path="/users">
              <ContactUS />
            </Route>
            <Route path="/">
              <Home handleFormData={this.handleFormData} />
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}
export default withAuth0(App);
