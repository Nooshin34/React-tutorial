import './App.css';
import React from "react";

function App() {
  // Numbers
  const age = 25;
  const pi = 3.14159;

  // Strings
  const name = "Alice";
  const greeting = `Hello, ${name}!`;

  // Booleans
  const isStudent = true;
  const isWorking = false;

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Variables & Data Types in React</h2>

      {/*In JSX, {age} means you’re inserting a JavaScript expression into your HTML */}
      <p><strong>Age:</strong> {age}</p>
      <p><strong>PI:</strong> {pi}</p>
      <p><strong>Greeting:</strong> {greeting}</p>

      <p><strong>Student:</strong> {isStudent ? "Yes" : "No"}</p>
      <p><strong>Working:</strong> {isWorking ? "Yes" : "No"}</p>
    </div>
  );
}

export default App;