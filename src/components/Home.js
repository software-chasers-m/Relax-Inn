import React, { Component } from 'react';
import Banner from './Banner';
import Cards from "../components/Cards";
import Explore from './Explore';
import Footer from './Footer';

export class Home extends Component {
  render() {
    return (
      <div>
        <Banner handleFormData={this.props.handleFormData} />
        <Cards />
        <Explore />
        <Footer />

      </div>
    )
  }
}

export default Home
