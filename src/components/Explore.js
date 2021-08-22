import React, { Component } from "react";
import { Container, Figure } from "react-bootstrap";
import img1 from '../assets/view.jpg';
export class Explore extends Component {
  render() {
    return (
      <div>
        <Container>
        <h1>Explore</h1>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Figure>
          <Figure.Image
          style={{borderRadius: '15px'}}
            width={170}
            height={170}
            alt="171x180"
            src={img1}
          />
        </Figure>
        <p>hello</p>
            </div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Figure>
          <Figure.Image
          style={{borderRadius: '15px'}}
            width={170}
            height={170}
            alt="171x180"
            src={img1}
          />
        </Figure>
        <p>hello</p>
            </div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Figure>
          <Figure.Image
          style={{borderRadius: '15px'}}
            width={170}
            height={170}
            alt="171x180"
            src={img1}
          />
        </Figure>
        <p>hello</p>
            </div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Figure>
          <Figure.Image
          style={{borderRadius: '15px'}}
            width={170}
            height={170}
            alt="171x180"
            src={img1}
          />
        </Figure>
        <p>hello</p>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Explore;
