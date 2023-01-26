import { css } from "@linaria/core";

export const cellStyle = css` 
  width: 20px;
  height: 20px;

  &:nth-of-type(2n+1) {
    background-color: #fff;
  }
  &:nth-of-type(2n) {
    background-color: skyblue;
  }
`