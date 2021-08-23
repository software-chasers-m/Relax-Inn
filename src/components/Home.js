import React, { Component } from 'react';
import Banner from './Banner';
import Cards from "../components/Cards";
import Explore from './Explore';

export class Home extends Component {
  render() {
    return (
      <div>
        <Banner handleFormData={this.props.handleFormData} />
        <Cards />
        <Explore />
      </div>
    )
  }
}

export default Home