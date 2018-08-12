import React from 'react';

import { Switch, Route } from 'react-router-dom';

// Components
import Home from '../pages/Home/Home';
import Cart from '../pages/Cart/Cart';
import Checkout from '../pages/Checkout/Checkout';

const Routes = () => {
  return (
  <Switch>
    <Route path="/" component={ Home } exact />    
    <Route path="/cart" component={ Cart } exact />    
    <Route path="/checkout" component={ Checkout } exact />    
  </Switch>
  );
};

export default Routes;