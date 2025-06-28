import { useState } from "react";
import { FiEdit3, FiTrash2, FiCheck, FiX } from "react-icons/fi";
import "./TodoItem.css";

const TodoItem = ({ todo, onDelete, onEdit, onSave, onCancel }) => {
  const [newText, setNewText] = useState(todo.text);

  const handleSave = () => {
    if (newText.trim()) {
      onSave(newText.trim());
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSave();
    } else if (e.key === "Escape") {
      onCancel();
      setNewText(todo.text);
    }
  };

  return (
    <li className="todo-item">
      {todo.isEditing ? (
        <div className="todo-edit-form">
          <input
            className="todo-input"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Enter todo text..."
            autoFocus
          />
          <button className="btn btn-save" onClick={handleSave} title="Save">
            <FiCheck />
          </button>
          <button
            className="btn btn-cancel"
            onClick={() => {
              onCancel();
              setNewText(todo.text);
            }}
            title="Cancel"
          ></button>
        </div>
      ) : (
        <div className="todo-item-content">
          <span className="todo-text">{todo.text}</span>
          <div className="todo-actions">
            <button className="btn btn-edit" onClick={onEdit} title="Edit">
              <FiEdit3 />
            </button>
            <button
              className="btn btn-delete"
              onClick={onDelete}
              title="Delete"
            >
              <FiTrash2 />
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
