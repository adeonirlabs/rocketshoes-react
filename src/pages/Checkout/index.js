import React from 'react'
import { FaReact } from 'react-icons/fa'

import { colors } from 'styles'
import { Container } from './styles'

const Checkout = () => {
  return (
    <Container>
      <div>
        <FaReact size={200} color={colors.secondary} className="logo" />
        <p>
          This is a sample of a store built with React, Redux and Redux-Saga!
        </p>
        <a
          href="https://github.com/adeonir/rocketshoes"
          rel="noopener noreferrer"
          target="_blank"
        >
          Go to project repository on GitHub
        </a>
      </div>
    </Container>
  )
}

export default Checkout
