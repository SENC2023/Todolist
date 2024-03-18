import React, { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

function addTodos(enter) {
    if (enter.key === "Enter") {
      setTodos(todos.concat( { label: inputValue, done: false }))
      setInputValue("");
    }
}

function removeTodos(currentIndex) {
   const filter = todos.filter((item, index) => index !== currentIndex)
   setTodos(filter)
}

console.log(todos)

  return (
    <div className="container">
      <h1 className="text-center">Lista de tareas</h1>
      <ul>
        <li>
          <input
            type="text"
            onChange={(llamar) => setInputValue(llamar.target.value)}
            value={inputValue}
            onKeyDown={addTodos}
            placeholder="Agrega una nueva tarea"
          />
        </li>
        {todos.map((item, index) => (
          <li key={index}>
            {item.label}
            <button 
              
              onClick={() => removeTodos(index)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </li>
        ))}
      </ul>
      <div>Tienes {todos.length} tareas pendientes por hacer</div>
    </div>
  );
};

export default Home;
