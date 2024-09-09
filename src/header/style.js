import { css } from '@bake-js/-o-id/dom'

function style() {
  return css`
    .header {
      background-color: #cccccc;
    }

    .header__container {
      align-items: center;
      display: flex;
      margin: 0 auto;
      max-width: 1440px;
      justify-content: space-between;
      padding: 24px 15px;
    }

    .header__a {
      cursor: pointer;
    }

    .header__logo {
      height: 42px;
      width: 42px;
    }

    .header__navigation {
      align-items: center;
      display: flex;
      gap: 20px;
    }

    .header__link {
      color: #595959;
      cursor: pointer;
      font-weight: 500;
      text-decoration: none;
    }

    .header__button {
      background-color: #a5a5a5;
      border-radius: 25px;
      border: none;
      cursor: pointer;
      height: 40px;
      padding: 0 5px;
      position: relative;
      width: 85px;
    }

    .header__circle {
      background-color: #7f7f7f;
      border-radius: 50px;
      height: 25px;
      left: 5px;
      position: absolute;
      top: 8px;
      transition: 0.2s ease;
      width: 30px;
    }

    .clicked {
      left: 58%;
      transition: 0.2s ease;
    }
  `
}

export default style
