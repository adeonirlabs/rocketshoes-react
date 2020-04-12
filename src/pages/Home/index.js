import React from 'react'
import { MdShoppingCart } from 'react-icons/md'

import { api } from 'services'

import { ProductList } from './styles'

const Home = () => {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-gonew-haze-masculino/98/C62-2349-198/C62-2349-198_zoom1.jpg?ts=1570451962&ims=326x"
          alt="Tenis 01"
        />
        <strong>Tenis masculino</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-gonew-haze-masculino/98/C62-2349-198/C62-2349-198_zoom1.jpg?ts=1570451962&ims=326x"
          alt="Tenis 01"
        />
        <strong>Tenis masculino</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-gonew-haze-masculino/98/C62-2349-198/C62-2349-198_zoom1.jpg?ts=1570451962&ims=326x"
          alt="Tenis 01"
        />
        <strong>Tenis masculino</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-gonew-haze-masculino/98/C62-2349-198/C62-2349-198_zoom1.jpg?ts=1570451962&ims=326x"
          alt="Tenis 01"
        />
        <strong>Tenis masculino</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-gonew-haze-masculino/98/C62-2349-198/C62-2349-198_zoom1.jpg?ts=1570451962&ims=326x"
          alt="Tenis 01"
        />
        <strong>Tenis masculino</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
    </ProductList>
  )
}

export default Home
