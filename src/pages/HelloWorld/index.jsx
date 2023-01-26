import React, { useState } from 'react'
import { cx } from '@linaria/core'

import Grid from 'components/Grid'

import { mockData } from './data'
import { globalStyle, bgStyle, StyledButton } from './style'

const HelloWorld = () => {
  const [counter, updateCounter] = useState(0)
  const [tokens, setTokens] = useState(mockData[0].tokens)
  const [carrierData, setCarrierData] = useState([])

  const onClickToken = tokenId => {
    console.log("a token was selected for transition", tokenId, tokens)
    const newTokenData = [...tokens]
    const token = newTokenData.find(({ id }) => tokenId === id)
    if (token) {
      // mark token as "in transit"
      token.isInTransit = true
      
      // compute source, destination, distance, time
      const { cellId: source } = token
      let destination = source + ROLL_COUNT
      let isTransitContinuous = false
      if (CELL_COUNT_LIMIT <= destination) {
        // mocking the scenario where a token has been killed by another
        destination = 0
        isTransitContinuous = true
      }
      
      // invoke transit carrier to carry token from source to destination
      const newCarrierEntry = {
        tokenId,
        source,
        destination,
        isTransitContinuous
      }
      setCarrierData([
        ...carrierData,
        newCarrierEntry
      ])
      
      setTokens(newTokenData)
    }
  }

  // when carrier has sent a token to its destination
  const onCarrierReach = (tokenId, destination) => {
    // update carrier data
    const newCarrierData = [...carrierData]
    const index = newCarrierData.findIndex(({ tokenId: id }) => id === tokenId) // check for correct entry
    if (index > -1) {
      newCarrierData.splice(index, 1) // remove the entry that has reached its destination
      setCarrierData(newCarrierData)
    }

    // update token data
    const newTokenData = [...tokens]
    const token = newTokenData.find(({ id }) => tokenId === id)
    if (token) {
      delete token.isInTransit // reset "in transit" status
      token.cellId = destination // update new cell id
      
      setTokens(newTokenData)
    }
  }
  
  return (
    <div className={cx(globalStyle, bgStyle)}>
      <div>I got in</div>
      <StyledButton count={counter} onClick={() => updateCounter(counter + 1)}>
        {counter ? `Clicked ${counter} time${counter === 1 ? '' : 's'}` : 'Click me!'}
      </StyledButton>
      
      <Grid tokens={tokens} onClickToken={onClickToken} carrierData={carrierData} onReach={onCarrierReach} />
    </div>
  )
}

const ROLL_COUNT = 3
const CELL_COUNT_LIMIT = 10

export default HelloWorld