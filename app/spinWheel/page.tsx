"use client";

import React, { useState } from "react";

const options = [
  "Pizza 🍕",
  "Burger 🍔",
  "Momo 🥟",
  "Pasta 🍝",
  "Fries 🍟",
  "Ice Cream 🍦",
];

const SpinWheel = () => {
  // final wheel result
  const [result, setResult] = useState("");

  // user picked option
  const [pickedOption, setPickedOption] = useState("");

  // check if matched
  const [message, setMessage] = useState("");

  // wheel rotation
  const [rotation, setRotation] = useState(0);

  const spinWheel = () => {
    // random index
    const randomIndex = Math.floor(Math.random() * options.length);

    // each slice angle
    const angle = 360 / options.length;

    // calculate rotation
    const newRotation =
      rotation + 360 * 5 + (360 - randomIndex * angle);

    // rotate wheel
    setRotation(newRotation);

    // after spin ends
    setTimeout(() => {
      const finalResult = options[randomIndex];

      setResult(finalResult);

      // check match
      if (pickedOption === finalResult) {
        setMessage("🎉 Correct Guess!");
      } else {
        setMessage("❌ Better luck next time!");
      }
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-5">

      <h1 className="text-4xl font-bold mb-8 text-blue-500">
        Spin The Wheel 🎡
      </h1>

      {/* select option */}
      <select
        value={pickedOption}
        onChange={(e) => setPickedOption(e.target.value)}
        className="mb-8 px-4 py-2 rounded-lg border"
      >
        <option value="">Pick Your Option</option>

        {options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>

      {/* wheel */}
      <div className="relative">

        {/* pointer */}
        <div className="absolute left-1/2 -top-5 -translate-x-1/2 z-10 text-4xl">
          🔻
        </div>

        <div
          className="w-80 h-80 rounded-full border-8 border-white shadow-lg flex justify-center items-center text-white font-bold text-2xl transition-transform duration-[3000ms]"
          style={{
            transform: `rotate(${rotation}deg)`,

            background: `
              conic-gradient(
                #3b82f6 0deg 60deg,
                #ef4444 60deg 120deg,
                #22c55e 120deg 180deg,
                #f59e0b 180deg 240deg,
                #8b5cf6 240deg 300deg,
                #ec4899 300deg 360deg
              )
            `,
          }}
        >
          SPIN
        </div>
      </div>

      {/* spin button */}
      <button
        onClick={spinWheel}
        disabled={!pickedOption}
        className="mt-10 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white px-8 py-3 rounded-xl text-lg font-semibold"
      >
        Spin
      </button>

      {/* result */}
      {result && (
        <div className="mt-8 text-center">

          <h2 className="text-3xl font-bold text-gray-700">
            Result: {result}
          </h2>

          <p className="mt-3 text-2xl font-semibold">
            {message}
          </p>

        </div>
      )}
    </div>
  );
};

export default SpinWheel;