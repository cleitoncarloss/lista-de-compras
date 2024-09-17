import component from './component'
import Echo from '@bake-js/-o-id/echo';
import { define, attributeChanged } from '@bake-js/-o-id'
import { paint, repaint } from '@bake-js/-o-id/dom'
import on, { prevent, formData } from "@bake-js/-o-id/event"
import style from './style.js'
import supabase from './supabase.js'

@define('c-edit')
@paint(component, style)
class Edit extends Echo(HTMLElement) {
  #product
  #visible
  #value

  get visible() {
    return (this.#visible ??= false)
  }

  get value() {
    return (this.#value ??= [])
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

  @on.click('.edit__close', prevent)
  close(event) {
    event.target.parentElement.remove()
  }

  @on.submit('form', prevent, formData)
  async fetch(data) {
    const { data: id } = await supabase
      .from('users')
      .select('id')
      .single()
      .limit(1)

    this.#value = id

    await supabase
      .from('users')
      .update({ name: data.item })
      .eq('id', this.#value.id)
      .select()

    location.reload()
  }
}

export default Edit 
