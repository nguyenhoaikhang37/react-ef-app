import { Box, Button, makeStyles, TextField, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useState } from 'react';

const useStyle = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.grey[300]}`,
  },

  range: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    '& > span': {
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
    },
  },
}));

const FilterByPrice = ({ onChange }) => {
  const classes = useStyle();
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });

  const handleChange = (e) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    onChange?.(values);
    setValues({
      salePrice_gte: 0,
      salePrice_lte: 0,
    });
  };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">GIÁ</Typography>

      <Box className={classes.range}>
        <TextField name="salePrice_gte" value={values.salePrice_gte} onChange={(e) => handleChange(e)} />
        <span>-</span>
        <TextField name="salePrice_lte" value={values.salePrice_lte} onChange={(e) => handleChange(e)} />
      </Box>

      <Button variant="outlined" color="primary" size="small" onClick={handleSubmit}>
        Áp dụng
      </Button>
    </Box>
  );
};

FilterByPrice.propTypes = {
  onChange: PropTypes.func,
};

export default FilterByPrice;
