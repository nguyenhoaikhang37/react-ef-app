import { Box, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import categoryApi from '../../../../apis/categoryApi';
import CategorySkeletonList from './CategorySkeletonList';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  menu: {
    padding: '0',
    margin: '0',
    '& > li': {
      marginTop: theme.spacing(1),
      listStyle: 'none',
      transition: 'all .25s',
      '&:hover': {
        color: theme.palette.primary.dark,
        cursor: 'pointer',
      },
    },
  },
}));

const FilterByCategory = ({ onChange }) => {
  const classes = useStyles();
  const [categoryList, setCategoryList] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await categoryApi.getAll();
        setCategoryList(
          response.map((x) => ({
            id: x.id,
            name: x.name,
          }))
        );
      } catch (error) {
        console.log('Failed to fetch category list ', error);
      }
      setLoading(false);
    })();
  }, []);

  const handleCategoryClick = (category) => {
    onChange?.(category);
  };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">DANH MỤC SẢN PHẨM</Typography>
      {Loading ? (
        <CategorySkeletonList />
      ) : (
        <ul className={classes.menu}>
          {categoryList.map((category) => (
            <li key={category.id} onClick={() => handleCategoryClick(category)}>
              <Typography variant="body2">{category.name}</Typography>
            </li>
          ))}
        </ul>
      )}
    </Box>
  );
};

FilterByCategory.propTypes = {
  onChange: PropTypes.func,
};

export default FilterByCategory;
