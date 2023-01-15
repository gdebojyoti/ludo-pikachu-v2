import React, { useState } from "react"

import { bgStyle } from './style'

const App = () => {
  const [counter, updateCounter] = useState(0)
  return (
    <div className={bgStyle}>
      <div>I got in</div>
      <button onClick={() => updateCounter(counter + 1)}>{counter ? `Clicked ${counter} time${counter === 1 ? '' : 's'}` : 'Click me!'}</button>
    </div>
  )
}

export default App