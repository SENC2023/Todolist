// import React, {useState} from "react";

// //create your first component
// const Home = () => {
	
// 	const [inputValue, setInputValue] = useState("")
// 	const [todos, setTodos] = useState([])

// 	console.log(inputValue);

// 	return (
// 		<div className="container">
// 			<h1>Lista de tareas</h1>
// 			<ul>
// 				<li>
// 					<input 
// 					type="text" 
// 					onChange={(llamar) => setInputValue(llamar.target.value)}
// 					value={inputValue} 
// 					onKeyDown={(enter) => {
// 						console.log("ENTER");
// 						if (enter.key === "Enter") {
// 							setTodos(todos.concat(inputValue))
// 							setInputValue("")
// 						}
// 					}}
// 					placeholder="Prueba" />
// 				</li>
// 				{todos.map((item, index) => ( 
// 					<li>
// 						{item}
// 					</li>
// 				))}
// 				<button className="btn btn-primary" 
// 					onClick={() => 
// 								setTodos(
// 									todos.filter(
// 										(t, currentIndex) =>
// 											index != currentIndex
// 									)
// 								)
// 							}>DELETE ME</button>
// 			</ul>
// 			<div>
// 				89 cosas por hacer
// 			</div>
// 		</div>
// 	);
// };

// export default Home;

import React, { useState } from "react";

// create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="container">
      <h1>Lista de tareas</h1>
      <ul>
        <li>
          <input
            type="text"
            onChange={(llamar) => setInputValue(llamar.target.value)}
            value={inputValue}
            onKeyDown={(enter) => {
              if (enter.key === "Enter") {
                setTodos([...todos, inputValue]);
                setInputValue("");
              }
            }}
            placeholder="Prueba"
          />
        </li>
        {todos.map((item, index) => (
          <li key={index}>
            {item}
            <button
              className="btn btn-primary"
              onClick={() =>
                setTodos(
                  todos.filter(
                    (t, currentIndex) => index !== currentIndex
                  )
                )
              }
            >
              DELETE ME
            </button>
          </li>
        ))}
      </ul>
      <div>{todos.length} cosas por hacer</div>
    </div>
  );
};

export default Home;
