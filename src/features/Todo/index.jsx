import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

const Todo = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={match.path} component={ListPage} exact></Route>
      <Route path={`${match.path}/:todoId`} component={DetailPage}></Route>
    </Switch>
  );
};

export default Todo;
