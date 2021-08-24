import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from 'react-bootstrap';
import './login.css'
const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button className="login" style={{ marginRight: '25px' }} variant='light'
    onClick={() => loginWithRedirect()}>Log In</Button>;
};

export default Login;