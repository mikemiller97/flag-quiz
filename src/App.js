import React, { useEffect } from "react"
import "./App.css";
import Body from "./components/Body"
import Victory from "./components/Victory"

function App() {
  const [victory, setVictory] = React.useState(false)

  useEffect(() => {

  })

  return (
    <div className="App">
      { victory ? <Victory /> : <Body setVictory={setVictory} /> }
    </div>
  );
}

export default App;
