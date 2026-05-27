'use client';

import React, { useState } from 'react';

const Counter = () => {
  const [number, setNumber] = useState(1);

  function increment() {
    setNumber(number + 1);
  }

  function decrement() {
    if (number > 0) {
      setNumber(number - 1);
    } else {
      console.log('negative value');
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-80 text-center border border-gray-200">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Counter App
        </h1>

        <div className="text-6xl font-bold text-blue-600 mb-8">
          {number}
        </div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={decrement}
            className="px-5 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition"
          >
            -
          </button>

          <button
            onClick={increment}
            className="px-5 py-2 rounded-lg bg-green-500 text-white font-medium hover:bg-green-600 transition"
          >
            +
          </button>
        </div>

        <p className="text-sm text-gray-500 mt-5">
          Use the buttons to increase or decrease the number.
        </p>
      </div>
    </div>
  );
};

export default Counter;