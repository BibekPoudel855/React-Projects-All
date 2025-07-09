import { useState } from "react";
import { useToDoContext } from "../context";
import { FaCheck, FaEdit, FaTrash, FaSave } from "react-icons/fa";

function TodoItem({ todo }) {
  const { updateToDo, deleteToDo, toggleComplete } = useToDoContext();
  const [isTodoEditingMode, setTodoEditMode] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const editTodo = () => {
    updateToDo(todo.id, { ...todo, todo: todoMsg });
    setTodoEditMode(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  // Handle keyboard events for better accessibility
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && isTodoEditingMode) {
      editTodo();
    } else if (e.key === "Escape" && isTodoEditingMode) {
      setTodoMsg(todo.todo);
      setTodoEditMode(false);
    }
  };

  return (
    <div
      className={`group flex items-center bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-all duration-200 ${
        todo.completed ? "opacity-75 bg-gray-50" : ""
      }`}
    >
      {/* Custom Checkbox */}
      <div className="flex items-center mr-3">
        <input
          type="checkbox"
          className="sr-only"
          checked={todo.completed}
          onChange={toggleCompleted}
          id={`todo-${todo.id}`}
        />
        <label
          htmlFor={`todo-${todo.id}`}
          className={`flex items-center justify-center w-5 h-5 rounded-md border-2 cursor-pointer transition-all duration-200 ${
            todo.completed
              ? "bg-green-500 border-green-500 text-white"
              : "border-gray-300 hover:border-gray-400"
          }`}
        >
          {todo.completed && <FaCheck className="w-3 h-3" />}
        </label>
      </div>

      {/* Todo Text Input */}
      <div className="flex-1 min-w-0">
        <input
          type="text"
          className={`w-full bg-transparent border-none outline-none text-gray-800 placeholder-gray-400 ${
            isTodoEditingMode
              ? "bg-gray-50 border border-blue-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              : "py-2"
          } ${todo.completed ? "line-through text-gray-500" : ""}`}
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          onKeyDown={handleKeyDown}
          readOnly={!isTodoEditingMode || todo.completed}
          placeholder="Enter todo text..."
        />
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 ml-3">
        {/* Edit/Save Button */}
        <button
          className={`p-2 rounded-lg transition-all duration-200 ${
            todo.completed
              ? "text-gray-400 cursor-not-allowed"
              : isTodoEditingMode
              ? "text-green-600 hover:bg-green-50 hover:text-green-700"
              : "text-blue-600 hover:bg-blue-50 hover:text-blue-700"
          }`}
          onClick={() => {
            if (todo.completed) return;
            if (isTodoEditingMode) {
              editTodo();
            } else {
              setTodoEditMode((prev) => !prev);
            }
          }}
          disabled={todo.completed}
          title={isTodoEditingMode ? "Save changes" : "Edit todo"}
        >
          {isTodoEditingMode ? (
            <FaSave className="w-4 h-4" />
          ) : (
            <FaEdit className="w-4 h-4" />
          )}
        </button>

        {/* Delete Button */}
        <button
          className="p-2 text-red-600 hover:bg-red-50 hover:text-red-700 rounded-lg transition-all duration-200"
          onClick={() => {
            deleteToDo(todo.id);
          }}
          title="Delete todo"
        >
          <FaTrash className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
