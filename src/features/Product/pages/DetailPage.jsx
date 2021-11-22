import { Box, Container, Grid, LinearProgress, makeStyles, Paper } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { Switch, useParams, Route, useRouteMatch } from 'react-router-dom';
import productApi from '../../../apis/productApi';
import AddToCartForm from '../components/AddToCartForm';
import ProductDescription from '../components/ProductDescription';
import ProductInfo from '../components/ProductInfo';
import ProductMenu from '../components/ProductMenu';
import ProductReviews from '../components/ProductReviews';
import ProductThumbnail from '../components/ProductThumbnail';

const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: '400px',
    padding: theme.spacing(1.5),
    borderRight: `1px solid ${theme.palette.grey[300]}`,
  },
  right: {
    flex: '1 1 0',
    padding: theme.spacing(1.5),
  },
  loading: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
  },
}));

const DetailPage = () => {
  const classes = useStyles();
  const match = useParams();
  const { url } = useRouteMatch();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const product = await productApi.get(match.productId);
        setProduct(product);
      } catch (error) {
        console.log('Failed to fetch product detail ', error);
      }
      setLoading(false);
    })();
  }, []);

  const handleAddToCartSubmit = (values) => {
    console.log(values);
  };

  if (loading) {
    return (
      <Box className={classes.loading}>
        <LinearProgress />
      </Box>
    );
  }

  return (
    <Box className={classes.root}>
      <Container>
        <Paper elevation={0}>
          <Grid container>
            <Grid item className={classes.left}>
              <ProductThumbnail product={product} />
            </Grid>
            <Grid item className={classes.right}>
              <ProductInfo product={product} />
              <AddToCartForm onSubmit={handleAddToCartSubmit} />
            </Grid>
          </Grid>
        </Paper>

        <ProductMenu />

        <Switch>
          <Paper elevation={1} style={{ padding: '15px' }}>
            <Route exact path={url}>
              <ProductDescription product={product} />
            </Route>

            <Route exact path={`${url}/additional`}>
              <ProductDescription />
            </Route>

            <Route exact path={`${url}/reviews`}>
              <ProductReviews />
            </Route>
          </Paper>
        </Switch>
      </Container>
    </Box>
  );
};

export default DetailPage;
