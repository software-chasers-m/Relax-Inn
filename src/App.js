import React, { Component } from 'react';
import AboutUs from './components/AboutUs';
import Hotels from './components/Hotels';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rooms from './components/Rooms';
import Home from './components/Home';
import User from './components/User';
import Cart from './components/Cart';
import Footer from './components/Footer'
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
      checkOut: '',
      hotelImage: '',
      hotelName: '',
      price: '',
      roomPrice: '',
      stayDays: '',
      userData: [],
    }
  }

  componentDidMount = () => {
    // if (this.props.auth0.isAuthenticated) {
    //   this.props.auth0.getIdTokenClaims()
    //     .then(result => {
    //       const jwt = result.__raw;
    const config = {
      // headers: { "Authorization": `Bearer ${jwt}` },
      method: 'get',
      baseURL: "http://localhost:8000",
      url: '/userData'
    }
    axios(config)
      .then(axiosResponse => {
        console.log(axiosResponse);
        this.setState({
          userData: axiosResponse.data,
        });
      })
  }

  handleFormData = (e) => {
    e.preventDefault()
    let location = e.target.location.value;
    let checkIn = e.target.checkin.value;
    let checkOut = e.target.checkout.value;
    let sort = e.target.sort.value;
    this.setState({
      checkIn: checkIn,
      checkOut: checkOut,
    })
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
    e.preventDefault();
    let id = e.target.id;
    const date1 = new Date(this.state.checkIn);
    const date2 = new Date(this.state.checkOut);
    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = date2.getTime() - date1.getTime();
    const diffInDays = Math.round(diffInTime / oneDay);
    const hotelArray = this.state.hotelsData.find(el => el.id === Number(id));
    this.setState({
      price: e.target.value.slice(1,),
      hotelImage: hotelArray.img,
      hotelName: hotelArray.name,
      stayDays: diffInDays
    })
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



  addToCart = (e) => {
    e.preventDefault();
    let id = e.target.id;
    const roomArray = this.state.roomsData.find(el => el.roomName === id);
    this.setState({
      roomPrice: e.target.value.slice(1, 4),
    })
    let data = {
      hotelName: this.state.hotelName,
      roomName: id,
      checkIn: this.state.checkIn,
      checkOut: this.state.checkOut,
      totalPrice: this.state.roomPrice,
      messageChildren: roomArray.maxOccupancy.messageChildren,
      messageTotal: roomArray.maxOccupancy.messageTotal,
      img: roomArray.images[0].fullSizeUrl,
      // email: this.props.auth0.user.name
    }
    let config = {
      // headers: { "Authorization": `Bearer ${jwt}` },
      method: 'post',
      baseURL: "http://localhost:8000",
      url: '/userData',
      data: data
    }
    axios(config).then(res => {
      let userData = this.state.userData
      userData.push(res.data)
      this.setState({
        userData: userData
      })
      console.log(userData)
    });
  }

  deleteRoom = (roomId) => {
    // if (this.props.auth0.isAuthenticated) {
    //   this.props.auth0.getIdTokenClaims()
    //     .then(result => {
    //       const jwt = result.__raw;
    let config = {
      // headers: { "Authorization": `Bearer ${jwt}` },
      method: 'delete',
      baseURL: "http://localhost:8000",
      url: `/userData/${roomId}`,
    }
    axios(config).then(res => {
      this.setState({
        userData: res.data
      })
    })
  }

  render() {
    return (
      <>
        <Router>
          <Navbar style={{ backgroundColor: '#f6e6cb59' }} expand="lg">
            <Container>
              <Navbar.Brand href="#"> <img src={logo} alt="" style={{ width: '120px', height: '50px' }} /></Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="mr-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px", fontWeight: '700' }}
                  navbarScroll
                >
                  <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/AboutUs">
                    <Nav.Link>About Us</Nav.Link>
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
                      <>
                        <div>
                          <LinkContainer to="/Cart">
                            <Nav.Link>Cart</Nav.Link>
                          </LinkContainer>
                        </div>
                        <div>
                          <Logout />
                        </div>
                        <div>
                          <User />
                        </div>
                      </> :
                      <Login />
                  }
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Switch>
            {this.state.hotelsData &&
              <Route path="/Hotels">
                <Hotels
                  hotelsData={this.state.hotelsData}
                  handleRoomsData={this.handleRoomsData}
                />
              </Route>
            }
            {this.state.roomsData &&
              <Route path="/Rooms">
                <Rooms roomsData={this.state.roomsData}
                  price={this.state.price}
                  hotelImage={this.state.hotelImage}
                  hotelName={this.state.hotelName}
                  stayDays={this.state.stayDays}
                  addToCart={this.addToCart}
                />
              </Route>
            }
            <Route path="/AboutUs">
              <AboutUs />
            </Route>
            <Route path="/cart">
              <Cart userData={this.state.userData}
                deleteRoom={this.deleteRoom}
              />
            </Route>
            <Route path="/">
              <Home handleFormData={this.handleFormData} />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}
export default withAuth0(App);
