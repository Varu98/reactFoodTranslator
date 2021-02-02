import React, { useState } from "react";
import "./styles.css";

var foodDictionary = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "WaterMelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "RedApple",
  "🍏": "GreenApple",
  "🍐": "Pear",
  "🍑": "Peach",
  "🍒": "Cherry",
  "🍓": "StrawBerry",
  "🥝": "Kiwi",
  "🍅": "Tomato",
  "🥥": "Coconut",
  "🥑": "Avacado",
  "🍄": "Mushroom",
  "🥨": "Pretzel",
  "🥯": "Bagel",
  "🥞": "Pancake"
};
var foodWeKnow = Object.keys(foodDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function foodInputHandler(event) {
    var userInput = event.target.value;

    var meaning = foodDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Sorry This Is Not In Our DataBase";
    }

    setMeaning(meaning);
  }

  function foodClickhandler(food) {
    var meaning = foodDictionary[food];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Food Emoji Interpreter</h1>

      <input zplaceholder="Input A Food Emoji" onChange={foodInputHandler} />
      <h2>{meaning}</h2>

      <h2>Food We Know</h2>

      {foodWeKnow.map(function (food) {
        return (
          <span
            onClick={() => foodClickhandler(food)}
            key={food}
            style={{
              cursor: "pointer",
              padding: "2rem",
              fontSize: "3rem"
            }}
          >
            {food}
          </span>
        );
      })}
    </div>
  );
}
