import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  function AddValue() {
    setCount(count + 1);
  }

  function RemoveValue() {
    if (count <= 0) {
      alert("Value is 0");
    } else {
      setCount(count - 1);
    }
  }


  return (
    <>

      <h2>Counter Value : {count}</h2>
      <button onClick={RemoveValue}>Remove Value</button>&nbsp;
      <button onClick={AddValue}>Add Value</button>
    </>
  )
}

export default App
