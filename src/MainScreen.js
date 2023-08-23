import React, { useState, useEffect } from "react";
import PlayerOne from "./PlayerOne";
import PlayerTwo from "./PlayerTwo";

function MainScreen({ apiKey }) {
  const [timer, setTimer] = useState(60);
  const [imageArray, setImageArray] = useState([]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  function handleRestart() {
    setImageArray([]);
    setTimer(60);
  }

  return (
    <div>
      <div className="player-container">
        <PlayerOne
          apiKey={apiKey}
          imageArray={imageArray}
          setImageArray={setImageArray}
        />
        <PlayerTwo
          apiKey={apiKey}
          imageArray={imageArray}
          setImageArray={setImageArray}
        />
      </div>

      <div className="timer">{timer} seconds remaining</div>
      <button onClick={handleRestart}>Restart</button>

      <div className="image-array">
        {imageArray.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Generated photo ${index}`} />
        ))}
      </div>
    </div>
  );
}

export default MainScreen;

// // import React, { useState, useEffect } from "react";
// // import PlayerOne from "./PlayerOne"; // Rename this import
// // import PlayerTwo from "./PlayerTwo"; // Rename this import

// // function MainScreen({ apiKey }) {
// //   const [timer, setTimer] = useState(60);
// //   const [imageArray, setImageArray] = useState([]);

// //   useEffect(() => {
// //     if (timer > 0) {
// //       const interval = setInterval(() => {
// //         setTimer((prevTimer) => prevTimer - 1);
// //       }, 1000);
// //       return () => clearInterval(interval);
// //     }
// //   }, [timer]);

// //   function handleRestart() {
// //     // Reset the game: clear images, reset timer, etc.
// //     setImageArray([]); // Clear the image array
// //     setTimer(60);
// //   }

// //   return (
// //     <div>
// //       <div className="player-container">
// //         <PlayerOne
// //           apiKey={apiKey}
// //           imageArray={imageArray}
// //           setImageArray={setImageArray}
// //         />
// //         <PlayerTwo
// //           apiKey={apiKey}
// //           imageArray={imageArray}
// //           setImageArray={setImageArray}
// //         />
// //       </div>

// //       <div className="timer">{timer} seconds remaining</div>
// //       <button onClick={handleRestart}>Restart</button>
// //     </div>
// //   );
// // }

// // export default MainScreen;
// import React, { useState, useEffect } from "react";
// import PlayerOne from "./PlayerOne"; // Rename this import
// import PlayerTwo from "./PlayerTwo"; // Rename this import

// function MainScreen({ apiKey }) {
//   const [timer, setTimer] = useState(60);
//   const [imageArray, setImageArray] = useState([]);

//   useEffect(() => {
//     if (timer > 0) {
//       const interval = setInterval(() => {
//         setTimer((prevTimer) => prevTimer - 1);
//       }, 1000);
//       return () => clearInterval(interval);
//     }
//   }, [timer]);

//   function handleRestart() {
//     // Reset the game: clear images, reset timer, etc.
//     setImageArray([]); // Clear the image array
//     setTimer(60);
//   }

//   return (
//     <div>
//       <div className="player-container">
//         <PlayerOne
//           apiKey={apiKey}
//           imageArray={imageArray}
//           setImageArray={setImageArray}
//         />
//         <PlayerTwo
//           apiKey={apiKey}
//           imageArray={imageArray}
//           setImageArray={setImageArray}
//         />
//       </div>

//       <div className="timer">{timer} seconds remaining</div>
//       <button onClick={handleRestart}>Restart</button>

//       {/* Display images from imageArray */}
//       <div className="image-array">
//         {imageArray.map((imageUrl, index) => (
//           <img key={index} src={imageUrl} alt={`Generated photo ${index}`} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MainScreen;
