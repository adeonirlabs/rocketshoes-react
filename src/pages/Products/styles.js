import styled from 'styled-components'
import { rgba } from 'polished'
import { colors } from 'styles'

export const ProductList = styled.ul`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 660px) {
    grid-template-columns: 1fr;
  }

  li {
    background: ${colors.white};
    box-shadow: 0 5px 20px ${rgba(colors.black, 0.5)};
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    padding: 20px;

    img {
      align-self: center;
      max-width: 250px;
    }

    > strong {
      color: ${colors.grayDark};
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
      background: ${colors.primary};
      border-radius: 4px;
      border: 0;
      color: ${colors.white};
      display: flex;
      height: 42px;
      margin-top: auto;
      overflow: hidden;
      text-transform: uppercase;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(90%);
      }

      div {
        align-items: center;
        background: ${rgba(colors.black, 0.1)};
        display: flex;
        height: 42px;
        justify-content: center;
        width: 52px;

        p {
          margin-left: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
      }
    }
  }
`
