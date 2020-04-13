import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'

import Routes from 'routes'

import { Header } from 'components'
import { GlobalStyles } from 'styles'

import './config/reactotronConfig'

import store from 'store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Routes />
      </BrowserRouter>
    </Provider>
  )
}

export default App
