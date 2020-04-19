import styled from 'styled-components'
import { rgba } from 'polished'
import { colors } from 'styles'

export const Container = styled.div`
  background: ${colors.white};
  border-radius: 4px;
  box-shadow: 0 5px 20px ${rgba(colors.black, 0.5)};
  padding: 20px;

  div {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 50px 0 0;
  }

  p {
    font-size: 18px;
    margin: 30px 0;
  }

  a {
    background: ${colors.secondary};
    border-radius: 4px;
    border: 0;
    color: ${colors.white};
    font-weight: bold;
    height: 42px;
    margin: 0 10px;
    padding: 12px 20px;
    text-decoration: none;
    text-transform: uppercase;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(90%);
    }
  }

  .logo {
    animation: logo-spin infinite 20s linear;
  }

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
