import "./App.css";
import React, { useState } from "react";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Button() {
  const [tickleFactor, setTickleFactor] = useState(0);

  const buttonStyle = {
    marginLeft: getRandomInt(-tickleFactor, tickleFactor).toString() + "px",
    marginTop: getRandomInt(-tickleFactor, tickleFactor).toString() + "px",
  };

  return (
    <div class="display-room">
      <div class="tickle-room">
        <button
          style={buttonStyle}
          onClick={() => setTickleFactor(tickleFactor + 50)}
          id="tickle"
        >
          Tickle!
        </button>
      </div>
      <div class="ui">
        <p>
          <button onClick={() => setTickleFactor(0)}>
            Reset Tickle Factor!
          </button> - Tickle Factor: {tickleFactor}
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <main>
      <Button />
    </main>
  );
}
