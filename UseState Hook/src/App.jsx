import { useState } from "react"

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div style={{ marginLeft: "15rem" }}>{count}</div>
      <button style={{ backgroundColor: "black", color: "white", padding: "1rem", margin: "2rem", borderRadius: ".5rem" }} onClick={() => setCount(count + 1)}>Increment</button>
      <button style={{ backgroundColor: "black", color: "white", padding: "1rem", margin: "2rem", borderRadius: ".5rem" }} onClick={() => setCount(count - 1)}>Decrement</button>
      <button style={{ backgroundColor: "black", color: "white", padding: "1rem", margin: "2rem", borderRadius: ".5rem" }} onClick={() => setCount(0)} >Reset Count</button>
    </div>
  )
}

export default App
