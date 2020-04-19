import React from 'react'
import { FaReact } from 'react-icons/fa'

import { Container } from './styles'

const Checkout = () => {
  return (
    <Container>
      <div>
        <FaReact size={200} color="#61dafb" className="logo" />
        <p>
          This is just a sample store built with React, Redux and Redux-Saga!
        </p>
        <a href="https://github.com/adeonir/rocketshoes" target="blank">
          Go to project repository on GitHub
        </a>
      </div>
    </Container>
  )
}

export default Checkout
