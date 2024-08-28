import { html } from '@bake-js/-o-id/dom'
import logo from './logo.png'

function component() {
  return html`
    <header class='header'>
      <a class='header__a'>
        <img
          src='${logo}'
          class='header__logo'
          alt='Lista de Compras'
          loading='eager'
        />
      </a>
      <nav class='header__navigation'>
        <a class='header__link'>home</a>
        <a class='header__link'>ver lista</a>
        <button class='header__button'>
          <div class='header__circle'></div>
        </button>
      </nav>
    </header>
  `
}

export default component
