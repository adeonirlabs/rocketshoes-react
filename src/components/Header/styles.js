import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from 'styles'

export const Container = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 50px 0;
`

export const Cart = styled(Link)`
  align-items: center;
  display: flex;
  position: relative;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  strong {
    color: ${colors.black};
    display: block;
    margin-right: 10px;
    text-align: right;
  }

  span {
    align-items: center;
    background: ${colors.primary};
    border-radius: 10px;
    color: ${colors.white};
    display: flex;
    font-size: 12px;
    height: 20px;
    justify-content: center;
    line-height: 12px;
    position: absolute;
    right: -5px;
    top: -7px;
    width: 20px;
  }
`
