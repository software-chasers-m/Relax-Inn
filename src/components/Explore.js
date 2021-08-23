import React, { Component } from "react";
import { Container, ListGroup } from "react-bootstrap";
//import img1 from "../assets/view.jpg";
import { FaCheckCircle } from "react-icons/fa";
import distance from "../assets/social_distancing@2x.png";
import wash from "../assets/wash_hands.png";
import sprayer from "../assets/sprayer.png";

export class Explore extends Component {
  render() {
    return (
      <div>
        <Container>
          <section className="m-4">
            <h2>Travel with confidence</h2>
            <p>
              Many properties have updated us about their enhanced health and
              safety measures. So, during your search, you may find details
              like:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <ListGroup vertical>
                <ListGroup.Item style={{ border: 'none', borderBottom: "1px solid #777" }}>
                  <h5>
                    <FaCheckCircle style={{ marginRight: '10px' }} />
                    Official health standards
                  </h5>
                  <div>
                    Properties adhering to corporate/organisational sanitisation
                    guidelines.
                  </div>
                </ListGroup.Item>
                <ListGroup.Item style={{ border: 'none', borderBottom: "1px solid #777" }}>
                  <h5>
                    <img
                      style={{ width: "50px", height: "50px", marginRight: '10px' }}
                      src={distance}
                      alt="userImage"
                    />
                    Social distancing
                  </h5>
                  <div>
                    Contactless check-in and check-out along with other social
                    distancing measures.
                  </div>
                </ListGroup.Item>
                <ListGroup.Item style={{ border: 'none', borderBottom: "1px solid #777" }}>
                  <h5>
                    <img
                      style={{ width: "34px", height: "34px", marginRight: '10px' }}
                      src={sprayer}
                      alt="userImage"
                    />
                    Hygiene and sanitisation
                  </h5>
                  <div>
                    The use of disinfectant and whether properties enforce a gap
                    period between stays.
                  </div>
                </ListGroup.Item>
                <ListGroup.Item style={{ border: 'none', borderBottom: "1px solid #777" }}>
                  <h6>
                    <img
                      style={{ width: "50px", height: "50px", marginRight: '10px' }}
                      src={wash}
                      alt="userImage"
                    />
                    Essentials at the property
                  </h6>
                  <div>
                    Free hand sanitiser for guests and individually wrapped food
                    options.
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </section>
        </Container>
      </div>
    );
  }
}

export default Explore;
