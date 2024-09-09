import component from './component'
import { define } from '@bake-js/-o-id'
import { paint } from '@bake-js/-o-id/dom'
import style from './style.js'
import on from "@bake-js/-o-id/event"

@define('c-header')
@paint(component, style)
class Header extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  @on.click('.header__button, .header__circle')
  darkmode() {
    this.shadowRoot.querySelector('.header__circle').classList.toggle('clicked')
  }
}

export default Header
