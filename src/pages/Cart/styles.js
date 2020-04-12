import styled from 'styled-components'

export const Container = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 30px;
`

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    padding: 12px;
    text-align-last: left;
  }

  tbody td {
    border-bottom: 1px solid #eee;
    padding: 12px;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    font-size: 18px;
    font-weight: bold;
    margin-top: 5px;
  }

  div {
    align-items: center;
    display: flex;

    input {
      border-radius: 4px;
      border: 1px solid #7159c1;
      color: #666;
      height: 32px;
      padding: 0 6px;
      width: 50px;
    }
  }

  button {
    align-items: center;
    background: none;
    border: 0;
    display: flex;
    height: 32px;
    padding: 0 6px;
  }
`

export const Footer = styled.footer`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  button {
    background: #7159c1;
    border-radius: 4px;
    border: 0;
    color: #fff;
    font-weight: bold;
    padding: 12px 20px;
    text-transform: uppercase;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(90%);
    }
  }

  div {
    align-items: baseline;
    display: flex;

    span {
      color: #999;
      font-weight: bold;
    }

    strong {
      font-size: 28px;
      margin-left: 10px;
    }
  }
`
