import { html } from '@bake-js/-o-id/dom'

function component(self) {
  return html`
    <form class='edit' visible="${self.visible}">
      <button class='edit__close'>X</button>
      <input class='edit__input' type='text' value='${self.product}' />
      <button class='edit__save'>Salvar</button>
    </form>
  `
}

export default component 
