import { css } from '@bake-js/-o-id/dom'

function style() {
  return css`
    .form {
      align-items: center;
      background-color: #f2f2f2;
      box-shadow: 0px 4px 12px -1px rgba(0, 0, 0, 0.1);
      border-radius: 6px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 30px;
      height: 300px;
      margin: 0 auto;
      padding: 10px 25px;
      width: 80%;
    }

    @media(width >= 585px) {
      .form {
        width: 100%;
      }
    }

    .form__title {
      color: #595959;
      margin: 0;
      text-align: center;
    }

    .form__container {
      display: flex;
      gap: 8px;
      flex-direction: column;
      width: inherit;
    }

    .form__label {
      color: #595959;
      font-weight: 500;
    }

    .form__input {
      background-color: transparent;
      padding: 8px 10px;
      border: 1px solid;
      border-radius: 5px;
    }

    .form__button {
      align-items: center;
      border: none;
      background-color: #7f7f7f;
      border-radius: 5px;
      color: #fff;
      cursor: pointer;
      display: flex;
      font-size: 18px;
      font-weight: bold;
      gap: 2px;
      justify-content: center;
      padding: 10px;
    }

    .form__img {
      height: 16px;
      width: 16px;
    }
  `
}

export default style
