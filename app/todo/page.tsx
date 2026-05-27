"use client";
import React, { useState } from 'react'
import { BiTrash } from 'react-icons/bi';

const Todo = () => {

  const [value, setValue] = useState('');
  const [todo, setTodo] = useState([]);

  const addTodo = () => {
    setTodo([...todo, value]);

  };

  const deleteTodo = (id) => {
    const updatedTodos = todo.filter((item, index) => {
      if (index != id) return item;
    });

    setTodo(updatedTodos);
  };

  return (

    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white w-full max-w-xl p-8 rounded-2xl shadow-lg">

        <h1 className="text-4xl font-bold text-center text-blue-500 mb-8">
          Todo List
        </h1>

        {/* input section */}
        <div className="flex gap-3 mb-8">

          <input
            type="text"
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter your task..."
            className="flex-1 p-4 bg-gray-100 rounded-lg outline-none border border-gray-200 focus:border-blue-400"
          />

          <button
            onClick={addTodo}
            className="bg-blue-500 hover:bg-blue-600 transition text-white px-6 rounded-lg font-semibold"

          >
            Add
          </button>

        </div>

        {/* todo list */}
        <div className="space-y-4">

          {todo.map((item, id) => {
            return (
              <div
                key={id}
                className="flex justify-between items-center bg-gray-100 p-4 rounded-xl shadow-sm"
              >

                <p className="text-lg font-medium text-gray-700">
                  {item}
                </p>

                <BiTrash
                  onClick={() => deleteTodo(id)}
                  className="text-red-500 text-2xl cursor-pointer hover:text-red-700 transition"
                />

              </div>
            );
          })}

        </div>

      </div>
    </div>
  );
};

export default Todo;