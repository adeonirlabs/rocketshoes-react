import styled from 'styled-components'

export const ProductList = styled.ul`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;

  li {
    background: #fff;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    padding: 20px;

    img {
      align-self: center;
      max-width: 250px;
    }

    > strong {
      color: #333;
      font-size: 16px;
      line-height: 20px;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      align-items: center;
      background: #7159c1;
      border-radius: 4px;
      border: 0;
      color: #fff;
      display: flex;
      margin-top: auto;
      overflow: hidden;
      text-transform: uppercase;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(90%);
      }

      div {
        align-items: center;
        background: rgba(0, 0, 0, 0.1);
        display: flex;
        padding: 12px;

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
      }
    }
  }
`
