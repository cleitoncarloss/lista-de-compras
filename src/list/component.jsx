import deleteImg from './delete.png'
import editImg from './edit.png'
import { html } from '@bake-js/-o-id/dom'

function component(self) {
  return html`
    <ul class='list'>
      ${self.product.map(e => {
        return `
          <li class='list__li'>
            ${e.name}
            <nav class='list__buttons'>
              <input class='list__checkbox' type='checkbox' />
              <button class='list__button'>
                <img 
                  class='list__img'
                  alt='Editar'
                  src='${editImg}' 
                  loading='eager'
                /> 
              </button>
              <button class='list__button'>
                <img 
                  class='list__img'
                  alt='Deletar'
                  src='${deleteImg}' 
                  loading='eager'
                /> 
              </button>
            </nav>
          </li>
        ` 
      })} 
    </ul>    
  `
}

export default component 
