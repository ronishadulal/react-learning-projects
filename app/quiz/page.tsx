"use client";
import React, { useState } from "react";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Tokyo", "Berlin"],
    answer: "Paris",
  },
  {
    question: "Which language is used in React?",
    options: ["Python", "Java", "JavaScript", "C++"],
    answer: "JavaScript",
  },
  {
    question: "2 + 2 = ?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    answer: "Mars",
  },
  {
    question: "HTML stands for?",
    options: [
      "Hyper Text Markup Language",
      "HighText Machine Language",
      "Home Tool Markup Language",
      "Hyper Transfer Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
];

export default function Quiz() {
  const [scores, setScores] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const quizSelection = (id, option) => {
    if (selectedAnswers[id]) return;

    const copy = [...selectedAnswers];
    copy[id] = option;
    setSelectedAnswers(copy);

    if (questions[id].answer === option) {
      setScores((prev) => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">

        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Quiz App
        </h1>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold">
            Your Score: {scores}
          </h2>
        </div>

        {questions.map((item, id) => (
          <div
            key={id}
            className="mb-8 border border-gray-200 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold mb-4">
              {id + 1}. {item.question}
            </h3>

            <ul className="grid gap-3">
              {item.options.map((option, index) => {
                const selected = selectedAnswers[id] === option;
                const correct = item.answer === option;

                return (
                  <li
                    key={index}
                    onClick={() => quizSelection(id, option)}
                    className={`p-3 rounded-lg cursor-pointer transition font-medium

                      ${selected && correct ? "bg-green-500 text-white" : ""}

                      ${selected && !correct ? "bg-red-500 text-white" : ""}

                      ${!selected ? "bg-gray-100 hover:bg-blue-100" : ""}
                    `}
                  >
                    {option}
                  </li>
                );
              })}
            </ul>

            {selectedAnswers[id] && (
              <p
                className={`mt-3 font-semibold ${
                  selectedAnswers[id] === item.answer
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {selectedAnswers[id] === item.answer
                  ? "Correct Answer ✅"
                  : "Wrong Answer ❌"}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}