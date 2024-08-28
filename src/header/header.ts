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

  @on.click('button, div')
  darkmode() {
    this.shadowRoot.querySelector('div').classList.toggle('clicked')
  }
}

export default Header
