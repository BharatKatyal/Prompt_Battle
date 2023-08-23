// import React from "react";
// import PhotoGenerator from "./PhotoGenerator";

// function App() {
//   const apiKey = "ENTER API KEY HERE";

//   return (
//     <div className="App">
//       <h1>Prompt Challenge</h1>
//       <header className="App-header">
//         <PhotoGenerator apiKey={apiKey} />
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import MainScreen from "./MainScreen"; // Update this import

function App() {
  const apiKey = "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";

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
