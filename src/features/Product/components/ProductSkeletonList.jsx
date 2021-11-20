import { Box, Grid } from '@material-ui/core';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
import PropTypes from 'prop-types';

const ProductSkeletonList = ({ length }) => {
  return (
    <Box>
      <Grid container>{/* <Skeleton count={length} /> */}</Grid>
    </Box>
  );
};

ProductSkeletonList.propTypes = {
  length: PropTypes.number,
};

ProductSkeletonList.defaultProps = {
  length: 6,
};

export default ProductSkeletonList;
