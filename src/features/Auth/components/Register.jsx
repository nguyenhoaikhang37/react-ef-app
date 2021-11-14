import RegisterForm from './RegisterForm';

const Register = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Register;
