import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Cart from './components/Cart';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
};

export default App;