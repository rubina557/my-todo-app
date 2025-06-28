import { useState } from "react";
import TodoList from "./components/TodoList";
import './App.css'

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo.trim(), isEditing: false }]);
      setNewTodo("");
    }
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index
          ? { ...todo, isEditing: true }
          : { ...todo, isEditing: false }
      )
    );
  };

  const handleSave = (index, newText) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, text: newText, isEditing: false } : todo
      )
    );
  };

  const handleCancel = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, isEditing: false } : todo
      )
    );
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div className="app">
      <div className="app-container">
        <div className="app-header">
          <h1 className="app-title">✨ Todo List</h1>
          <p className="app-subtitle">Stay organized and get things done</p>
        </div>

        <div className="add-todo-form">
          <div className="add-todo-input-group">
            <input
              className="add-todo-input"
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Add a new todo..."
            />
            <button className="btn-add" onClick={handleAddTodo}>
              Add Todo
            </button>
          </div>
        </div>

        <TodoList
          todos={todos}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      </div>
    </div>
  );
};

export default App;
