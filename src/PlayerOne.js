// // PlayerOne.js and PlayerTwo.js are almost identical
// import React, { useState } from "react";

// function Player({ apiKey }) {
//   const [photoUrl, setPhotoUrl] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [inputText, setInputText] = useState("");

//   function handleGeneratePhoto() {
//     setIsLoading(true);
//     setError(null);

//     fetch("https://api.openai.com/v1/images/generations", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${apiKey}`,
//       },
//       body: JSON.stringify({
//         model: "image-alpha-001",
//         prompt: inputText,
//         num_images: 1,
//         size: "256x256",
//         response_format: "url",
//       }),
//     })
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           throw new Error("Unable to generate photo. Please try again.");
//         }
//       })
//       .then((data) => {
//         const newImageArray = [...imageArray, data.data[0].url];
//         setImageArray(newImageArray);
//         setPhotoUrl(data.data[0].url);
//       })
//       .catch((error) => setError(error.message))
//       .finally(() => setIsLoading(false));
//   }

//   function handleInputChange(event) {
//     setInputText(event.target.value);
//   }

//   return (
//     <div>
//       <label htmlFor="input-text">Enter text to generate photo:</label>
//       <input
//         type="text"
//         id="input-text"
//         value={inputText}
//         onChange={handleInputChange}
//       />
//       <br />
//       <br />
//       <button onClick={handleGeneratePhoto} disabled={isLoading}>
//         {isLoading ? "Generating..." : "Generate Photo"}
//       </button>
//       {error && <p>{error}</p>}
//       {photoUrl && <img src={photoUrl} alt="Generated photo" />}
//     </div>
//   );
// }

// export default Player;

import React, { useState } from "react";

function PlayerOne({ apiKey, imageArray, setImageArray }) {
  const [photoUrl, setPhotoUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [inputText, setInputText] = useState("");

  function handleGeneratePhoto() {
    setIsLoading(true);
    setError(null);

    fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "image-alpha-001",
        prompt: inputText,
        num_images: 1,
        size: "256x256",
        response_format: "url",
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Unable to generate photo. Please try again.");
        }
      })
      .then((data) => {
        // Store the new image URL temporarily
        const newImageArray = [...imageArray, data.data[0].url];
        setImageArray(newImageArray);

        // Set the photo URL for display
        setPhotoUrl(data.data[0].url);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }

  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  return (
    <div>
      <label htmlFor="input-text">Enter text to generate photo:</label>
      <input
        type="text"
        id="input-text"
        value={inputText}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <button onClick={handleGeneratePhoto} disabled={isLoading}>
        {isLoading ? "Generating..." : "Generate Photo"}
      </button>
      {error && <p>{error}</p>}
      {photoUrl && <img src={photoUrl} alt="Generated photo" />}
    </div>
  );
}

export default PlayerOne;