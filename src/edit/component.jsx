import { html } from '@bake-js/-o-id/dom'

function component(self) {
  return html`
    <form class='edit'>
      <input type='text' value='${self.product}' />
      <button>Salvar</button>
    </form>
  `
}

export default component 
