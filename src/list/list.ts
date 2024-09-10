import component from './component'
import { define } from '@bake-js/-o-id'
import { paint, repaint } from '@bake-js/-o-id/dom'
import on from "@bake-js/-o-id/event"
import style from './style.js'
import supabase from './supabase'
import Echo from '@bake-js/-o-id/echo';
import { willPaint } from '@bake-js/-o-id/dom';

@define('c-list')
@paint(component, style)
class List extends Echo(HTMLElement) {
  #product

  get product() {
    return (this.#product ??= [])
  }

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  @willPaint
  async fetch() {
    const { data } = await supabase
      .from("users")
      .select("*")

    this.#product = data
    return this
  }

  @on.click('.edit')
  edit(event) {
    const product = event.target.parentElement.parentNode.parentElement.textContent
    this.dispatchEvent(new CustomEvent('click', { detail: product }))
  }

  @on.click('.delete')
  @repaint
  async delete(event) {
    await supabase
      .from('users')
      .delete()
      .eq('name', event.target.parentElement.parentNode.parentElement.innerText)
  }
}

export default List 
