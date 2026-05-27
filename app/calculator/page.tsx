"use client";
import React, { useState } from "react";

// buttons layout (UI structure)
const calculatorKeys = [
  ["7", "8", "9", "/"],
  ["4", "5", "6", "*"],
  ["1", "2", "3", "-"],
  ["0", ".", "=", "+"],
  ["C"],
];

const Calculator = () => {

  // 🧠 input = what user is typing (stored as STRING)
  // Example: "12+5"
  const [input, setInput] = useState("");

  // ⚙️ list of operators
  // used to prevent wrong input like "5++2"
  const symbols = ["/", "*", "-", "+"];

  // 👉 this function runs when user clicks any button
  const selectedValue = (num) => {

    // 🔍 get last character from input
    // Example: "5+" → lastCharacter = "+"
    const lastCharacter = input[input.length - 1];

    // 🚫 RULE: don't allow two operators together
    // Example: "5+" + "*" ❌ not allowed
    if (
      symbols.includes(lastCharacter) &&
      symbols.includes(num)
    ) {
      return;
    }

    // 🧹 CLEAR BUTTON
    if (num === "C") {
      setInput(""); // reset everything
      return;
    }

    // 🧮 EQUAL BUTTON (=)
    // eval() converts string into real calculation
    // Example: "5+2" → 7
    if (num === "=") {
      setInput(eval(input));
      return;
    }

    // ➕ NORMAL BUTTON CLICK
    // just add clicked value to string
    // Example: "12" + "3" → "123"
    setInput(input + num);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <div className="bg-white p-6 rounded-2xl shadow-lg">

        <h1 className="text-2xl font-bold text-center mb-4">
          Calculator
        </h1>

        {/* 📺 screen (shows current input/result) */}
        <input
          type="text"
          value={input}
          readOnly
          className="w-full border p-3 mb-5 text-right text-xl"
        />

        {/* 🔢 render buttons */}
        {calculatorKeys.map((row, i) => (
          <div key={i} className="flex gap-3 mb-3">

            {row.map((num, j) => (
              <button
                key={j}
                onClick={() => selectedValue(num)}
                className="w-16 h-16 bg-gray-100 rounded-lg text-xl hover:bg-blue-100"
              >
                {num}
              </button>
            ))}

          </div>
        ))}

      </div>
    </div>
  );
};

export default Calculator;