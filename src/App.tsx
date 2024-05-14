import { useEffect, useState } from "react";
import { useAppDispatch } from "./hook";

import { addTodo, fetchTodos } from "./store/todoSlice";
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";

import "./App.css";

function App() {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <div className="App">
      <NewTodoForm
        value={text}
        updateText={setText}
        handleAction={handleAction}
      />
      <TodoList />
    </div>
  );
}

export default App;
