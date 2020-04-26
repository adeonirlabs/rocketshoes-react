import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { MdShoppingCart } from 'react-icons/md'

import { colors } from 'styles'
import { Container, Cart } from './styles'

import logo from '../../assets/images/logo.svg'

const Header = () => {
  const counter = useSelector((state) => state.cart.length)

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>
      <Cart to="/cart">
        <strong>My Cart</strong>
        <span>{counter}</span>
        <MdShoppingCart size={36} color={colors.black} />
      </Cart>
    </Container>
  )
}

export default Header
