import React from 'react';
import { Container, Button } from 'react-bootstrap';

const LoginScreen = ({ history }) => {
  const handleLogin = () => {
    history.replace('/');
  };

  return (
    <Container className='mt-5'>
      <h1>Login</h1>
      <hr />

      <Button variant='primary' onClick={handleLogin}>
        Login
      </Button>
    </Container>
  );
};

export default LoginScreen;
