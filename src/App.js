import React from "react";
import PhotoGenerator from "./PhotoGenerator";

function App() {
  const apiKey = "ENTER API KEY HERE";

  return (
    <div className="App">
      <h1>Prompt Challenge</h1>
      <header className="App-header">
        <PhotoGenerator apiKey={apiKey} />
      </header>
    </div>
  );
}

export default App;
