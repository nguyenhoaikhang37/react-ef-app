import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

const InputField = ({ form, name, label, disabled }) => {
  const { errors, formState } = form;
  const hasError = Boolean(formState.touched[name] && errors[name]);

  return (
    <Controller
      name={name}
      control={form.control}
      as={TextField}
      variant="outlined"
      margin="normal"
      fullWidth
      label={label}
      disabled={disabled}
      error={hasError}
      helperText={errors[name]?.message}
    />
  );
};

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

export default InputField;
