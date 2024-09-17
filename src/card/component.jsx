import { html } from '@bake-js/-o-id/dom'
import add from './add.svg'

function component() {
  return html`
    <form class="form">
      <h1 class="form__title">Oquê você vai comprar hoje?</h1>

      <div class="form__container">
        <o-text-field label='Nome do produto' required name='item'>
          <o-required-validator text='Nome do produto obrigátorio'></o-required-validator>
        </o-text-field>
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
