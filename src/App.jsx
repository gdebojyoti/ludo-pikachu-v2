import React, { useState } from "react"

const App = () => {
  const [counter, updateCounter] = useState(0)
  return (
    <div>
      <div>I got in</div>
      <button onClick={() => updateCounter(counter + 1)}>{counter ? `Clicked ${counter} time${counter === 1 ? '' : 's'}` : 'Click me!'}</button>
    </div>
  )
}

export default App