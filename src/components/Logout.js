import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from 'react-bootstrap';
import './login.css';

const Logout = () => {
  const { logout } = useAuth0();

  return (
    <Button className="login mx-3" variant='light' onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </Button >
  );
};

export default Logout;