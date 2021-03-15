import React, { useContext } from 'react';
import { Container, Button } from 'react-bootstrap';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';
    dispatch({
      type: types.login,
      payload: {
        name: 'Jorge',
      },
    });

    history.replace(lastPath);
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
