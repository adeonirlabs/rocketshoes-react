import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Home, Cart, Checkout } from 'pages'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/checkout" component={Checkout} />
    </Switch>
  )
}

export default Routes
