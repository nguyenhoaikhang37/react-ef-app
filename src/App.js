import { useEffect } from 'react';
import productApi from './apis/productApi';
import Todo from './features/Todo';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import Counter from './features/Counter';
import Header from './components/Header';

function App() {
  useEffect(() => {
    (async () => {
      const params = {
        _limit: 10,
      };
      const res = await productApi.getAll(params);
      console.log(res);
    })();
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Redirect from="/" to="/todos" exact />
        <Route path="/todos" component={Todo}></Route>
        <Route path="/counter" component={Counter}></Route>
      </Switch>
    </div>
  );
}

export default App;
