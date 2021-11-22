import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { Box } from '@material-ui/core';

const Product = () => {
  const match = useRouteMatch();

  return (
    <Box pt={4}>
      <Switch>
        <Route path={match.url} exact component={ListPage} />
        <Route path={`${match.url}/:productId`} component={DetailPage} />
      </Switch>
    </Box>
  );
};

export default Product;
