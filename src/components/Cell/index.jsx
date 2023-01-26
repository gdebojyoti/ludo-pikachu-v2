import React from 'react'

import Token from 'components/Token'

import { cellStyle } from './style'

const Cell = ({ index, tokens, onClickToken }) => {
  return (
    <div className={cellStyle} data-cell-id={index}>
      {tokens.map(token => token.isInTransit ? null : <Token data={token} onClick={onClickToken} key={token.id} />)}
    </div>
  )
}

export default Cell