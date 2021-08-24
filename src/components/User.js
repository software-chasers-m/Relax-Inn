import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';

export class User extends Component {
  render() {
    return (
      <div className="d-flex justify-conteny-center align-items-center">
        {
          this.props.auth0.isAuthenticated &&
          <>
            <img src={this.props.auth0.user.picture} style={{ width: '35px' }} className="rounded-circle" alt="userImage" />
          </>
        }
      </div>
    )
  }
}

export default withAuth0(User);
