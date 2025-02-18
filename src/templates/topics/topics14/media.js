// リスポンシブ対応用の設定ファイル

import { css } from "styled-components";

const media = {
  // smartphone
  sp: (...args) => css`
    @media (max-width: 640px) {
      ${css(...args)}
    }
  `,
};

export default media;
