import { Box, Button, Checkbox, FormControlLabel, makeStyles, TextField, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useState } from 'react';

const useStyle = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.grey[300]}`,
  },

  list: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    '& > li': {
      margin: 0,
    },
  },
}));

const FilterByService = ({ filters = {}, onChange }) => {
  const classes = useStyle();

  const handleChange = (e) => {
    onChange?.({
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">DỊCH VỤ</Typography>
      <ul className={classes.list}>
        {[
          { value: 'isPromotion', label: 'Có khuyến mãi' },
          { value: 'isFreeShip', label: 'Miễn phí vận chuyển' },
        ].map((service) => (
          <li key={service.value}>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  name={service.value}
                  checked={Boolean(filters[service.value])}
                  onChange={(e) => handleChange(e)}
                />
              }
              label={service.label}
            />
          </li>
        ))}
      </ul>
    </Box>
  );
};

FilterByService.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

export default FilterByService;
