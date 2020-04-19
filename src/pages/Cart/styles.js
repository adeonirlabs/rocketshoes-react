import styled from 'styled-components'
import { rgba } from 'polished'
import { colors } from 'styles'

export const Container = styled.div`
  background: ${colors.white};
  border-radius: 4px;
  box-shadow: 0 5px 20px ${rgba(colors.black, 0.5)};
  padding: 20px;
`

export const EmtpyCart = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 50px 0 0;

  p {
    font-size: 18px;
    margin: 20px 0;
  }

  a {
    background: ${colors.primary};
    border-radius: 4px;
    border: 0;
    color: ${colors.white};
    font-weight: bold;
    height: 42px;
    padding: 12px 20px;
    text-decoration: none;
    text-transform: uppercase;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(90%);
    }
  }
`

export const ProductTable = styled.table`
  width: 100%;

  thead {
    @media (max-width: 680px) {
      display: none;
    }

    th {
      color: ${colors.grayMid};
      padding: 12px;
      text-align-last: left;
    }
  }

  tbody {
    tr {
      @media (max-width: 680px) {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
      }
    }

    td {
      padding: 12px;

      &:first-child {
        @media (max-width: 680px) {
          padding-bottom: 0;
          padding-left: 0;
        }
      }

      &:nth-child(2) {
        @media (max-width: 680px) {
          flex: 1 1 65%;
        }

        span {
          @media (max-width: 680px) {
            color: ${colors.grayMid};
            font-size: 14px;
          }
        }
      }

      &:nth-child(3),
      &:nth-child(4),
      &:nth-child(5) {
        @media (max-width: 680px) {
          padding-bottom: 0;
          padding-top: 0;
        }
      }

      &:nth-child(3) {
        @media (max-width: 680px) {
          padding: 0;
        }

        @media (max-width: 356px) {
          flex: 1;

          div {
            justify-content: flex-start;
          }
        }
      }

      &:nth-child(4) {
        @media (max-width: 680px) {
          flex: 1;
          font-size: 16px;
          text-align: center;
        }

        @media (max-width: 356px) {
          display: none;
        }
      }

      &:nth-child(5) {
        @media (max-width: 680px) {
          padding: 12px 0;
        }
      }
    }
  }

  img {
    height: 100px;
  }

  strong {
    color: ${colors.grayDark};
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
      border: 1px solid ${colors.primary};
      color: ${colors.grayMid};
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
  border-top: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  padding-top: 30px;

  @media (max-width: 560px) {
    flex-direction: column-reverse;
  }

  a {
    background: ${colors.primary};
    border-radius: 4px;
    border: 0;
    color: ${colors.white};
    font-weight: bold;
    height: 42px;
    padding: 12px 20px;
    text-decoration: none;
    text-transform: uppercase;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(90%);
    }

    @media (max-width: 560px) {
      margin-top: 20px;
      text-align: center;
      width: 100%;
    }
  }

  div {
    align-items: baseline;
    display: flex;

    span {
      color: ${colors.grayLight};
      font-weight: bold;
    }

    strong {
      font-size: 28px;
      margin-left: 10px;
    }
  }
`
