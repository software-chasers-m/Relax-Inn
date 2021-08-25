import React, { Component } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';

class UpdateFormModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkIn: this.props.checkIn,
      checkOut: this.props.checkOut,
    };
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
          size="md"
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