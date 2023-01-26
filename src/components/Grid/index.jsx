import React, { useState } from 'react'

import Cell from 'components/Cell'
import TransitCarrier from 'components/TransitCarrier'

import { gridStyle } from './style'

const Grid = ({ tokens, onClickToken, carrierData, onReach }) => {
  return (
    <div className={gridStyle}>
      {[...Array(10).keys()].map((index => (
        <Cell key={index} index={index} tokens={getTokensForCell(tokens, index)} onClickToken={onClickToken} />
      )))}

      {carrierData.map(data => (
        <TransitCarrier data={data} key={data.tokenId} onReach={onReach} />
      ))}
    </div>
  )
}

function getTokensForCell (data, id) {
  return data.filter(({ cellId }) => cellId === id)
}

export default Grid
