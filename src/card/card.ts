import component from './component'
import { define } from '@bake-js/-o-id'
import on, { prevent, formData } from "@bake-js/-o-id/event"
import { paint, repaint } from '@bake-js/-o-id/dom'
import style from './style.js'
import supabase from './supabase'

@define('c-card')
@paint(component, style)
class Card extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  @on.submit('form', prevent, formData)
  @repaint
  async fetch(data) {
    await supabase
      .from('users')
      .insert({ name: data.item })
  }
}

export default Card 
