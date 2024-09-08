import component from './component'
import { define } from '@bake-js/-o-id'
import { paint } from '@bake-js/-o-id/dom'
import style from './style.js'

@define('c-card')
@paint(component, style)
class Card extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }
}

export default Card 
