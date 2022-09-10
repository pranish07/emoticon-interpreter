import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😭": "Crying",
  "🙁": "Sad",
  "😁": "Happy",
  "🤩": "Excited",
  "😡": "Angry",
  "😌":"Relieved Face",
  "🤥":"Lying Face",
  "😎":" Smiling Face with Sunglasses",
  "🙏":"Folded Hands",
};

var emojisWeKnow = Object.keys(emojiDictionary);

function App() {
  const [meaning, setMeaning] = useState("");
  function inputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we dont have this in database";
    }
    setMeaning(meaning);
    // console.log(meaning);
  }
  function listMeaningDisplayed(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>inside outtt</h1>
      <input type="text" onChange={inputHandler} style={{width:"80%",padding:".5rem"}}/>
      <h2>{meaning === "" ? "output will be displayed here" : meaning}</h2>

      {emojisWeKnow.map((emoji) => {
        return (
          <span
            key={emoji}
            style={{
              fontSize: "2rem",
              padding: "1rem 0.5rem",
              cursor: "pointer",
            }}
            onClick={() => listMeaningDisplayed(emoji)}
          >
            {" "}
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

export default App;
