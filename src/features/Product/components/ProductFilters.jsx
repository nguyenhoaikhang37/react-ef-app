import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import FilterByCategory from './Filters/FilterByCategory';
import FilterByPrice from './Filters/FilterByPrice';
import FilterByService from './Filters/FilterByService';

const ProductFilters = ({ filters, onChange }) => {
  const handleCategoryChange = (newCategory) => {
    const newFilters = {
      'category.id': newCategory.id,
      'category.name': newCategory.name,
      _page: 1,
    };

    onChange?.(newFilters);
  };

  const handleChange = (values) => {
    const newFilters = {
      ...values,
      _page: 1,
    };

    onChange?.(newFilters);
  };

  return (
    <Box>
      <FilterByCategory onChange={handleCategoryChange} />
      <FilterByPrice onChange={handleChange} />
      <FilterByService filters={filters} onChange={handleChange} />
    </Box>
  );
};

ProductFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

export default ProductFilters;
