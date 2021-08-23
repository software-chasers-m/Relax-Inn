import React, { Component } from 'react';
import { Button, Container, Badge } from "react-bootstrap";

class Cart extends Component {
  render() {
    return (
      this.props.userData.length > 0 &&
      <div>
        {this.props.userData.map((element, index) => {
          return (
            <Container key={index} style={{ maxWidth: '900px' }}>
              <div className="card mb-3" style={{ width: '100%' }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img style={{ height: '100%' }} src={element.img} className="img-fluid rounded-start" alt="room_Image" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{element.hotelName}</h5>
                      <h6 className="card-title">{element.roomName}</h6>
                      <p className="card-text">
                        Max children : {element.messageChildren}<br></br>
                        {element.messageTotal}
                      </p>
                      <div>
                        <Badge className="bg-secondary mx-2 p-3 text-white" text="dark">
                          Check In: {element.checkIn}
                        </Badge>
                        <Badge className="bg-secondary p-3 text-white" text="dark">
                          Check Out: {element.checkOut}
                        </Badge>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          {Number(element.totalPrice) ? (<>TotalPrice: &nbsp;
                            <Badge className="bg-warning mt-3" text="dark">
                              {`$${element.totalPrice}`}
                            </Badge><br />
                          </>)
                            : 'Total Price: TBD'
                          }
                        </div>
                        <div>
                          <Button className="mt-2 mx-2 rounded-pill bg-danger"
                            onClick={() => this.props.deleteRoom(element._id)}
                          >Delete</Button>
                          <Button className="mt-2 mx-end rounded-pill"
                          >Confirm</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          )
        })
        }
      </div>
    )
  }
}

export default Cart
