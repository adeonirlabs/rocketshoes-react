import styled from 'styled-components'
import { rgba } from 'polished'

export const Container = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 30px;
  box-shadow: 0 5px 20px ${rgba('#000', 0.5)};

  div {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 50px 0;
  }

  p {
    font-size: 18px;
    margin: 30px 0;
  }

  a {
    background: #7159c1;
    border-radius: 4px;
    border: 0;
    color: #fff;
    font-weight: bold;
    padding: 12px 20px;
    text-decoration: none;
    text-transform: uppercase;
    transition: filter 0.2s;
    margin: 0 10px;

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
