import React, { useState } from "react"

import { bgStyle, StyledButton } from './style'

const HelloWorld = () => {
  const [counter, updateCounter] = useState(0)
  return (
    <div className={bgStyle}>
      <div>I got in</div>
      <StyledButton count={counter} onClick={() => updateCounter(counter + 1)}>
        {counter ? `Clicked ${counter} time${counter === 1 ? '' : 's'}` : 'Click me!'}
      </StyledButton>
    </div>
  )
}

export default HelloWorld