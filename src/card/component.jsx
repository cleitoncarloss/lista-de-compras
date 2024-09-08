import { html } from '@bake-js/-o-id/dom'
import add from './add.svg'

function component() {
  return html`
    <form class="form">
      <h1 class="form__title">Oquê você vai comprar hoje?</h1>

      <div class="form__container">
        <label class="form__label" for="item">Nome do produto:</label>
        <input class="form__input" type="text" id="item" placeholder="digite aqui..." required />
        <button class="form__button">
          Adicionar
          <img 
            class="form__img"
            alt="Adicionar"
            src="${add}"
            loading="eager"
          />
        </button>
      </div>
    </form>
  `
}

export default component
