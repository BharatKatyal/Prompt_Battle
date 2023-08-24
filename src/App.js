import React from "react";
import MainScreen from "./MainScreen"; // Update this import

function App() {
  const apiKey = process.env.REACT_APP_APIKEY;

  return (
    <div className="App">
      <h1>Prompt Challenge</h1>
      <header className="App-header">
        <MainScreen apiKey={apiKey} />
      </header>
    </div>
  );
}

export default App;