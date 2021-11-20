import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { register } from '../userSlice';
import RegisterForm from './RegisterForm';
import { toast } from 'react-toastify';

const Register = ({ closeDialog }) => {
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    try {
      // auto set username = email
      values.username = values.email;

      const resultAction = await dispatch(register(values));
      const user = unwrapResult(resultAction);
      toast.success('Đăng ký thành công');

      closeDialog?.();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Register;
