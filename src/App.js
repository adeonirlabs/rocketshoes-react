import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import { Routes } from 'routes'

import { Header } from 'components'
import { GlobalStyles } from 'styles'

import './config/reactotronConfig'

import { store, history } from 'store'

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <ToastContainer autoClose={3000} />
        <GlobalStyles />
        <Header />
        <Routes />
      </Router>
    </Provider>
  )
}

export default App
