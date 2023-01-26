import React, { useEffect, useRef, useState } from 'react'

import Token from 'components/Token'

import { CarrierStyle } from './style'

const TransitCarrier = ({ data, onReach }) => {
  const {
    tokenId, source, destination, isTransitContinuous, delta = 1
  } = data

  const [currentPosition, setCurrentPosition] = useState(source)
  const timer = useRef()
  
  // run this every time currentPosition gets updated via setTimeout
  useEffect(() => {
    // compute a path from source to destination
    if (currentPosition === source) {
      console.log(`charting a path for ${tokenId} from ${source} to ${destination}`)
    }

    // clear existing timer, if any
    if (timer.current) {
      clearTimeout(timer.current)
    }

    if (destination > currentPosition) {
      // update current position via timeout if destination is yet to be reached
      timer.current = setTimeout(() => {
        setCurrentPosition(currentPosition + delta)
      }, 500)
    } else {
      // else, invoke onReach callback method
      onReach(tokenId, destination)
    }

    // cleanup: remove timeout during component unmount
    return () => {
      timer.current && clearTimeout(timer.current)
    }
  }, [currentPosition])

  return <CarrierStyle index={currentPosition}>
    <Token data={{id : tokenId}} onClick={() => console.warn("clicking not allowed while in transit")} />
  </CarrierStyle>
}

export default TransitCarrier