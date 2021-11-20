import { unwrapResult } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { login } from '../userSlice';
import LoginForm from './LoginForm';

Login.propTypes = {
  closeDialog: PropTypes.func,
};

function Login({ closeDialog }) {
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    try {
      const resultAction = await dispatch(login(values));
      const user = unwrapResult(resultAction);
      toast.success('Đăng nhập thành công');

      closeDialog?.();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit}></LoginForm>
    </div>
  );
}

export default Login;
