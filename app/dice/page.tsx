'use client'
import React, { useState } from 'react';

const Dice = () => {
  const [randomNum, setRandomNum] = useState(null);

  function rollDice() {
    const randomNumber = Math.ceil(Math.random() * 6);
    setRandomNum(randomNumber);
  }

  return (
    <div>
      <button
        onClick={rollDice}
        className='bg-yellow-200 text-green-500 border shadow-md'
      >
        Roll the dice
      </button>

      {randomNum ? (
        <img
          src={`dice${randomNum}.png`}
          height={200}
          width={200}
          alt={`Dice ${randomNum}`}
        />
      ) : (
        <div>Click on button to roll the dice</div>
      )}
    </div>
  );
};

export default Dice;