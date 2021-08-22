import React, { Component } from 'react';
import Banner from './Banner';
import Cards from "../components/Cards";
import Explore from './Explore';
import Hotels from './Hotels';
import Rooms from './Rooms';
export class Home extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Cards />
        <Explore />
        <Hotels />
        <Rooms />
      </div>
    )
  }
}

export default Home
