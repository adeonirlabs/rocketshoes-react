import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Products, Cart, Checkout } from 'pages'

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Products} />
      <Route path="/cart" component={Cart} />
      <Route path="/checkout" component={Checkout} />
    </Switch>
  )
}
