import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import productApi from '../../../apis/productApi';
import ProductSkeletonList from '../components/ProductSkeletonList';

const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: '250px',
  },
  right: {
    flex: '1 1 0',
  },
  pagination: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    padding: '30px 0 20px',
  },
}));

const ListPage = (props) => {
  const classes = useStyles();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await productApi.getAll({ _page: 1, _limit: 10 });
        setProductList(data);
      } catch (error) {
        console.log('Failed to fetch product list: ', error);
      }

      // setLoading(false);
    })();
  }, []);

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>Left</Paper>
          </Grid>

          <Grid item className={classes.right}>
            <Paper elevation={0}>{loading ? <ProductSkeletonList /> : <p>Product List</p>}</Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

ListPage.propTypes = {};

export default ListPage;
