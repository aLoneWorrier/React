// React Hook -> Special function which allows functional components to use react features
//               without writing class components (React v16.8)
//               {useState, useEffect, useContext, useReducer, useCallback, or more}

// useState() -> A React hook that allows the creation of the stateful variable AND
//               a setter function to update its value in the virtual DOM.
//               [name, setName] 

import Counter from "./Counter"

function App() {
  return (
    <>
      <Counter/>
    </>
  )
}

export default App
