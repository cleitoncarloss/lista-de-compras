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
  #visible

  get visible() {
    return (this.#visible ??= false)
  }

  get product() {
    return (this.#product ??= '')
  }

  @attributeChanged('product')
  @repaint
  set product(value) {
    this.#product = value
    this.#visible = true
  }

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  @on.click('.edit__save', prevent)
  @repaint
  edit() {
    const product = this.getAttribute('list')
    this.#product = product
  }

  @on.click('.edit__close', prevent)
  close(event) {
    event.target.parentElement.remove()
  }
}

export default Edit 
