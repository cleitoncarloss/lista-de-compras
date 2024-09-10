import component from './component'
import Echo from '@bake-js/-o-id/echo';
import { define, attributeChanged } from '@bake-js/-o-id'
import { paint, repaint } from '@bake-js/-o-id/dom'
import on, { prevent } from "@bake-js/-o-id/event"
import style from './style.js'

@define('c-edit')
@paint(component, style)
class Edit extends Echo(HTMLElement) {
  #product

  get product() {
    return (this.#product ??= '')
  }

  @attributeChanged('product')
  @repaint
  set product(value) {
    this.#product = value
  }

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  @on.click('button', prevent)
  @repaint
  edit() {
    const product = this.getAttribute('list')
    this.#product = product
  }
}

export default Edit 
