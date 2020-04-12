import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from 'routes'

import { Header } from 'components'
import { GlobalStyles } from 'styles'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes />
    </BrowserRouter>
  )
}

export default App
