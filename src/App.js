import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import Routes from 'routes'

import { Header } from 'components'
import { GlobalStyles } from 'styles'

import './config/reactotronConfig'

import store from 'store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer autoClose={3000} />
        <GlobalStyles />
        <Header />
        <Routes />
      </BrowserRouter>
    </Provider>
  )
}

export default App
