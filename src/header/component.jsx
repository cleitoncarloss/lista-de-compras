import { html } from '@bake-js/-o-id/dom'
import logo from './logo.png'

function component(self) {
  return html`
    <header class='header'>
      <div class='header__container'>
        <a class='header__a'>
          <img
            src='${logo}'
            class='header__logo'
            alt='Lista de Compras'
            loading='eager'
          />
        </a>
        <nav class='header__navigation'>
          <a class='header__link' href='../../index.html'>Home</a>
          <a class='header__link' href='../../lista.html'>Ver Produtos</a>
          <button class='header__button'>
            <div class='header__circle' clicked='${self.clicked}'></div>
          </button>
        </nav>
      </div>
    </header>
  `
}

export default component
