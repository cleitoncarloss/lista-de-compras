import { css } from '@bake-js/-o-id/dom'

function style() {
  return css`
    .list {
      display: flex;
      flex-direction: column;
      gap: 8px;
      list-style: none;
      margin: 0 auto;
      max-width: 700px;
      padding: 0;
    } 

    .list__li {
      align-items: center;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0px 4px 12px -1px rgba(0, 0, 0, 0.1);
      color: #595959; 
      display: flex;
      font-weight: 500;
      justify-content: space-between;
      padding: 14px;
    }

    .list__buttons {
      align-items: center;
      display: flex;
      gap: 15px;
    }

    .list__container {
      position: relative;
    }

    .list__checkbox {
      cursor: pointer;
      margin: 0;
      height: 20px;
      width: 20px;
    }

    .list__button {
      background-color: transparent;
      cursor: pointer;
      border: none;
      padding: 0;
    }

    .list__button::after {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      height: 24px;
      top: 0;
      width: 24px;
    }

    .list__img {
      height: 24px;
      width: 24px;
    }
  `
}

export default style
