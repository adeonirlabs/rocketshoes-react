import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
    color: #fff;
    display: block;
    margin-right: 10px;
    text-align: right;
  }

  span {
    align-items: center;
    background: #7159c1;
    border-radius: 10px;
    color: #fff;
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
