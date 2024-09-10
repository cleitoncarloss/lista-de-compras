import { css } from '@bake-js/-o-id/dom'

function style() {
  return css`
    .edit {
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0px 4px 12px -1px rgba(0, 0, 0, 0.1);
      display: none;
      height: 300px;
      justify-content: center;
      flex-direction: column;
      position: absolute;
      gap: 8px;
      left: 50%;
      transform: translate(-50%, -50%);
      right: 50%;
      top: 50%;
      padding: 16px;
      width: 80%;
      z-index: 1999;
    }

    .edit[visible="true"] {
      display: flex;
    }

    .edit__close {
      background-color: transparent;
      border: none;
      cursor: pointer;
      position: absolute; 
      font-size: 28px;
      top: 16px;
      right: 16px;
    }

    .edit__input {
      border: 1px solid;
      border-radius: 5px;
      padding: 8px 10px;
    }

    .edit__save {
      border: none;
      background-color: #7f7f7f;
      border-radius: 5px;
      color: #fff;
      cursor: pointer;
      font-size: 18px;
      font-weight: bold;
      padding: 10px;
    }
  `
}

export default style
