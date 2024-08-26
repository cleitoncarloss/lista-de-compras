import component from './component'
import { define } from '@bake-js/-o-id'
import { paint } from '@bake-js/-o-id/dom'
import style from './style.js'

@define('c-header')
@paint(component, style)
class Header extends HTMLElement {
  get name() {
    return 'Cleito'
  }
}

export default Header
