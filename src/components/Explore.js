import React, { Component } from "react";
import { Container, Figure, ListGroup } from "react-bootstrap";
import img1 from '../assets/view.jpg';
import { FaCheckCircle } from "react-icons/fa";
import distance from "../assets/social_distancing@2x.png";
import wash from "../assets/wash_hands.png";
import sprayer from "../assets/sprayer.png";


export class Explore extends Component {
  render() {
    return (

      <div>
        {/* <Container>
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
        </Container> */}
        <Container>
          <section>
            <h2>
              Travel with confidence
            </h2>
            <p>
              Many properties have updated us about their enhanced health and safety measures.
              So, during your search, you may find details like:
            </p>
            <ListGroup horizontal >
              <ListGroup.Item style={{ width: '600px', border: 'none' }}><div><h3> <FaCheckCircle />
                Official health standards </h3> <span>Properties adhering to corporate/organisational
                  sanitisation guidelines.
                </span> </div></ListGroup.Item>
              <ListGroup.Item style={{ width: '600px', border: 'none' }}><div><h3> <img
                style={{width: '50px',height: '50px' }} src={distance} alt="userImage" /> Social distancing </h3>
                <span>Contactless check-in and check-out along with other social distancing measures.
                </span> </div></ListGroup.Item></ListGroup><ListGroup horizontal>
              <ListGroup.Item style={{ width: '600px', border: 'none' }}><div><h3> <img
                style={{ width: '50px',height: '50px' }} src={sprayer} alt="userImage" />Hygiene and sanitisation</h3>
                <span>The use of disinfectant and whether properties enforce a gap period between stays.
               </span>
              </div></ListGroup.Item>
              <ListGroup.Item style={{ width: '600px', border: 'none' }}><div><h3> <img
                style={{ width: '50px',height: '50px' }} src={wash} alt="userImage" />Essentials at the property </h3>
                <span>Free hand sanitiser for guests and individually wrapped food options.</span> </div>
              </ListGroup.Item>
            </ListGroup>
          </section>
        </Container>
      </div>
    );
  }
}

export default Explore;
