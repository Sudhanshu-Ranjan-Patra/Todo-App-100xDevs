import { useState } from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState();

  fetch("http://localhost:3000/todos").then(async function (res) {
    const data = await res.json();

    setTimeout(() => {
      setTodos(data.todos);
    }, 5000);
  });

  return (
    <>
      <CreateTodo />
      <Todo todos={todos} />
    </>
  );
}

export default App;
