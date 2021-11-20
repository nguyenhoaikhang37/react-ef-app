import { Box, Chip, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useMemo } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row wrap',
    padding: 0,
    alignItems: 'center',
    listStyle: 'none',
    marginLeft: theme.spacing(2),
    margin: theme.spacing(2, 0),
    '& > li': {
      pading: theme.spacing(1),
      margin: 0,
      marginRight: theme.spacing(1),
    },
  },
}));

const FILTER_LIST = [
  {
    id: 1,
    getLabel: () => 'Giao hàng miễn phí',
    isActive: (filters) => filters.isFreeShip,
    isVisible: () => true,
    isRemovable: false,
    onRemove: () => {},
    onToggle: (filters) => {
      const newFilters = { ...filters };

      if (newFilters.isFreeShip) {
        delete newFilters.isFreeShip;
      } else newFilters.isFreeShip = true;

      return newFilters;
    },
  },
  {
    id: 2,
    getLabel: () => 'Có khuyến mãi',
    isActive: () => true,
    isVisible: (filters) => filters.isPromotion,
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };

      if (newFilters.isPromotion) {
        delete newFilters.isPromotion;
      }

      return newFilters;
    },
    onToggle: () => {},
  },
  {
    id: 3,
    getLabel: (filters) =>
      `Từ ${Number(filters.salePrice_gte).toLocaleString()} đến ${Number(filters.salePrice_lte).toLocaleString()}`,
    isActive: () => true,
    isVisible: (filters) =>
      Number.parseInt(filters.salePrice_gte) > 0 &&
      Number.parseInt(filters.salePrice_lte) > 0 &&
      filters.salePrice_gte &&
      filters.salePrice_lte,
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.salePrice_gte;
      delete newFilters.salePrice_lte;

      return newFilters;
    },
    onToggle: () => {},
  },
  {
    id: 4,
    getLabel: (filters) => `${filters['category.name']}`,
    isActive: () => true,
    isVisible: (filters) => filters['category.id'],
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters['category.id'];
      delete newFilters['category.name'];

      return newFilters;
    },
    onToggle: () => {},
  },
];

const FilterViewer = ({ filters = {}, onChange }) => {
  const classes = useStyles();

  const visibleFilters = useMemo(() => {
    return FILTER_LIST.filter((x) => x.isVisible(filters));
  }, [filters]);

  return (
    <Box component="ul" className={classes.root}>
      {visibleFilters.map((item) => (
        <li key={item.id}>
          <Chip
            size="small"
            label={item.getLabel(filters)}
            color={item.isActive(filters) ? 'primary' : 'default'}
            clickable={!item.isRemovable}
            onClick={
              item.isRemovable
                ? null
                : () => {
                    const newFilters = item.onToggle(filters);
                    onChange?.(newFilters);
                  }
            }
            onDelete={
              item.isRemovable
                ? () => {
                    const newFilters = item.onRemove(filters);
                    onChange?.(newFilters);
                  }
                : null
            }
          />
        </li>
      ))}
    </Box>
  );
};

FilterViewer.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

export default FilterViewer;
