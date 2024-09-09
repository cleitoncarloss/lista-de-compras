import component from './component'
import { define } from '@bake-js/-o-id'
import on, { prevent } from "@bake-js/-o-id/event"
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

  @on.click('button', prevent)
  @repaint
  async fetch(event) {
    await supabase
      .from('users')
      .insert({ name: event.target.previousElementSibling.value })
  }
}

export default Card 
