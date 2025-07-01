import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Cart from './components/Cart';

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/cart" component={Cart} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;