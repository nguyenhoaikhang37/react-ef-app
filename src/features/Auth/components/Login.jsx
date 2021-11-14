import PropTypes from 'prop-types';
import React from 'react';
import LoginForm from './LoginForm';

Login.propTypes = {
  closeDialog: PropTypes.func,
};

function Login({ closeDialog }) {
  return (
    <div>
      <LoginForm></LoginForm>
    </div>
  );
}

export default Login;
