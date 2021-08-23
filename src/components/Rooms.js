import React, { Component } from "react";
// import data1 from "../components/data/room.json";
import { Button, Container } from "react-bootstrap";
export class Rooms extends Component {
  render() {
    return (
      <Container>
        {this.props.roomsData.map((el) => {
          return (
            <div className="card mb-3" style={{ width: '100%' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={el.images[0].fullSizeUrl} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{el.roomName}</h5>
                    <p className="card-text">
                      Max children : {el.maxOccupancy.messageChildren}<br></br>
                      {el.maxOccupancy.messageTotal}
                    </p>
                    <Button>Book</Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Container>
    )
  }
}

export default Rooms;

