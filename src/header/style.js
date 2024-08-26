import { css } from '@bake-js/-o-id/dom'

function style(self) {
  return css`
    h1 {
      color: ${self.name == 'Cleiton' ? 'red' : 'blue'};
    }
  `
}

export default style
