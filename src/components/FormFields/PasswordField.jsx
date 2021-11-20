import { FormHelperText } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';

const PasswordField = ({ form, name, label, disabled }) => {
  const { errors } = form;
  const hasError = !!errors[name];

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((x) => !x);
  };

  return (
    <FormControl error={hasError} fullWidth margin="normal" variant="outlined">
      <InputLabel>{label}</InputLabel>
      <Controller
        name={name}
        control={form.control}
        as={OutlinedInput}
        id={name}
        type={showPassword ? 'text' : 'password'}
        label={label}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" onClick={toggleShowPassword} edge="end">
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        disabled={disabled}
        labelWidth={70}
      />

      <FormHelperText>{errors[name]?.message}</FormHelperText>
    </FormControl>
  );
};

PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

export default PasswordField;