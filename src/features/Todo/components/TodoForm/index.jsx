import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputField from '../../../../components/FormFields/InputField';

const schema = yup.object().shape({
  title: yup.string().required('Please enter title'),
});

const TodoForm = ({ onSubmit }) => {
  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    onSubmit?.(values);
    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="title" label="Todo" form={form} />
    </form>
  );
};

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default TodoForm;
