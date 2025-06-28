import { BsCardChecklist } from "react-icons/bs";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ todos, onDelete, onEdit, onSave, onCancel }) => {
  return (
    <div className="todo-list-container">
      {todos.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">
            <BsCardChecklist />
          </div>
          <p className="empty-state-text">
            No todos yet. Add one to get started!
          </p>
        </div>
      ) : (
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              onDelete={() => onDelete(index)}
              onEdit={() => onEdit(index)}
              onSave={(newText) => onSave(index, newText)}
              onCancel={() => onCancel(index)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
