import { Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import NotFound from './components/NotFound';
import Counter from './features/Counter';
import Product from './features/Product';
import Todo from './features/Todo';

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Redirect from="/" to="/todos" exact />

        <Route path="/todos" component={Todo}></Route>
        <Route path="/counter" component={Counter}></Route>
        <Route path="/products" component={Product}></Route>

        <Route path="*" component={NotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
