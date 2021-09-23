import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);


  useEffect(() => {
    console.log(count)
    // setCount(count + 1) el contador n para de contar 
  }, [count])


  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>Contando: {count}</p>
          <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
      </header>
    </div>
  );
}

export default App;
