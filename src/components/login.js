import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton1 = () => {
  const { loginWithRedirect } = useAuth0();

  return loginWithRedirect();
};

export default LoginButton1;
