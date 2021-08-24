import React, { Component } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import axios from "axios";
import { withAuth0 } from '@auth0/auth0-react';

class UpdateFormModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkIn: this.props.checkIn,
      checkOut: this.props.checkOut,
    };
  }

  updateBook = (e) => {
    if (e.target.title.value) {
      this.props.hideModalForm(false);
    }

    if (this.props.auth0.isAuthenticated) {
      this.props.auth0.getIdTokenClaims()
        .then(result => {
          const jwt = result.__raw;
          let data = {
            title: this.state.title,
            status: this.state.status,
            description: this.state.description,
          }
          let config = {
            headers: { "Authorization": `Bearer ${jwt}` },
            method: 'put',
            baseURL: "http://localhost:8000",
            url: `/books/${this.props.updateBookId}`,
            data: data
          }
          axios(config).then(res => {
            console.log('Successfully updated');
          })
        })
        .catch((error) => console.log(error));
    }
  }

  getCheckIn = (e) => {
    this.setState({
      checkIn: e.target.value
    })
  }

  getCheckOut = (e) => {
    this.setState({
      checkOut: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Modal
          show={this.props.show}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Form style={{ padding: '20px' }} onSubmit={e => this.props.updateUserData(e)} >
            <Modal.Header>
              <Modal.Title id="contained-modal-title-vcenter">
                Update The Reservation
              </Modal.Title>
            </Modal.Header>

            <Form.Group className="mb-3" controlId="checkIn">
              <Form.Label>Check In date</Form.Label>
              <Form.Control onChange={e => this.getCheckIn(e)} type="date" value={this.state.checkIn} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="checkOut">
              <Form.Label>Check Out Date</Form.Label>
              <Form.Control onChange={e => this.getCheckOut(e)} type="date" value={this.state.checkOut} />
            </Form.Group>
            <Modal.Footer>
              <Button variant="primary" type="submit">
                Update
              </Button>
              <Button onClick={this.props.hideModalForm}>Close</Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    )
  }
}

export default withAuth0(UpdateFormModal);