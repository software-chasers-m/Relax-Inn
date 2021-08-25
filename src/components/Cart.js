import React, { Component } from 'react';
import UpdateFormModal from './UpdateFormModal';
import axios from 'axios';
import { Button, Container, Badge } from "react-bootstrap";
import {
  FaEdit
} from "react-icons/fa";

class Cart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checkIn: '',
      checkout: '',
      totalPrice: '',
      roomId: '',
      show: false
    }
  }


  showUpdateModal = (element) => {

    let checkInOld = element.checkIn;
    let checkOutOld = element.checkOut;
    const date1 = new Date(checkInOld);
    const date2 = new Date(checkOutOld);
    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = date2.getTime() - date1.getTime();
    const diffInDays = Math.round(diffInTime / oneDay);
    let price;
    if (Number(element.totalPrice)) {
      price = Number(element.totalPrice) / diffInDays;
    } else {
      price = 'TBD'
    }
    this.setState({
      roomId: element._id,
      checkIn: element.checkIn,
      checkout: element.checkOut,
      totalPrice: price,
      show: true
    })
  }

  updateUserData = (e) => {
    e.preventDefault();
    if (e.target.checkIn) {
      this.setState({
        show: false
      })
    }
    let checkIn = e.target.checkIn.value;
    let checkOut = e.target.checkOut.value;
    const date1 = new Date(checkIn);
    const date2 = new Date(checkOut);
    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = date2.getTime() - date1.getTime();
    const diffInDays = Math.round(diffInTime / oneDay);

    let totalPrice;
    if (Number(this.state.totalPrice)) {
      totalPrice = diffInDays * this.state.totalPrice;
    } else {
      totalPrice = 'TBD';
    }
    let data = {
      checkIn: checkIn,
      checkOut: checkOut,
      totalPrice: totalPrice,
    }
    let config = {
      method: 'put',
      baseURL: "https://relax-inn.herokuapp.com",
      url: `/userData/${this.state.roomId}`,
      data: data
    }
    axios(config).then(res => {
      console.log('updated');
    })
  }

  hideModalForm = () => {
    this.setState({
      show: false
    })
  }

  render() {
    return (
      <div style={{ minHeight: '70vh' }}>
        {
          this.props.userData.length > 0 &&
          <div style={{ minHeight: '100vh' }}>
            <UpdateFormModal show={this.state.show}
              checkIn={this.state.checkIn}
              checkOut={this.state.checkout}
              updateUserData={this.updateUserData}
              hideModalForm={this.hideModalForm} />
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
                          <div className="d-flex justify-content-between">
                            <h5 className="card-title">{element.hotelName}</h5>
                            <FaEdit size={20} onClick={() => this.showUpdateModal(element)} />
                          </div>
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
        }
      </div>
    )
  }
}

export default Cart
