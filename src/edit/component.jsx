import { html } from '@bake-js/-o-id/dom'

function component(self) {
  return html`
    <form class='edit' visible="${self.visible}">
      <button class='edit__close'>X</button>
      <o-text-field required name='item' value='${self.product.trim()}'>
        <o-required-validator text='Digite um valor'></o-required-validator>
      </o-text-field>
      <button class='edit__save'>Salvar</button>
    </form>
  `
}

export default component 
