'use client'
import React, { useEffect, useState } from 'react'

const RockPaper = () => {
  const choices = ['rock', 'paper', 'scissors']

  const [userChoice, setUserChoice] = useState("")
  const [computerChoice, setComputerChoice] = useState("")
  const [result, setResult] = useState("")
  const [score, setScore] = useState(0)

  useEffect(() => {
    if (!userChoice) return

    const randomChoice = choices[Math.floor(Math.random() * 3)]
    setComputerChoice(randomChoice)

    if (userChoice === randomChoice) {
      setResult("Draw 🤝")
    } else if (
      (userChoice === "rock" && randomChoice === "scissors") ||
      (userChoice === "paper" && randomChoice === "rock") ||
      (userChoice === "scissors" && randomChoice === "paper")
    ) {
      setResult("You Win 🎉")
      setScore(prev => prev + 1)
    } else {
      setResult("You Lose 😢")
      setScore(prev => prev - 1)
    }

  }, [userChoice])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white">

      <h1 className="text-4xl font-bold mb-4">🎮 Rock Paper Scissors</h1>

      <h2 className="text-2xl mb-6">Score: {score}</h2>

      {/* Buttons */}
      <div className="flex gap-4 mb-6">
        {choices.map(choice => (
          <button
            key={choice}
            onClick={() => setUserChoice(choice)}
            className="px-6 py-2 bg-white text-black rounded-lg shadow-md hover:scale-105 transition"
          >
            {choice.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Result Box */}
      <div className="bg-white text-black p-6 rounded-xl shadow-lg text-center">
        <p className="text-lg"><strong>You:</strong> {userChoice}</p>
        <p className="text-lg"><strong>Computer:</strong> {computerChoice}</p>
      </div>

      {/* Result */}
      <h2 className="text-2xl mt-6 font-semibold">{result}</h2>

      {/* Reset */}
      <button
        onClick={() => {
          setUserChoice("")
          setComputerChoice("")
          setResult("")
          setScore(0)
        }}
        className="mt-6 px-6 py-2 bg-red-500 rounded-lg hover:bg-red-600 transition"
      >
        Reset 🔄
      </button>

    </div>
  )
}

export default RockPaper