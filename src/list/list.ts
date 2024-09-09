import component from './component'
import { define } from '@bake-js/-o-id'
import { paint } from '@bake-js/-o-id/dom'
import style from './style.js'
import supabase from './supabase'
import { willPaint } from '@bake-js/-o-id/dom';

@define('c-list')
@paint(component, style)
class List extends HTMLElement {
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
}

export default List 
