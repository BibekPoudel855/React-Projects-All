import { useState } from "react";
import { useToDoContext } from "../context";
import { FaPlus } from "react-icons/fa";

function TodoForm() {
  const { addToDo } = useToDoContext();
  const [todoAdding, setTodoAdding] = useState("");

  const add = (e) => {
    e.preventDefault();
    if (!todoAdding.trim()) return;
    addToDo({ todo: todoAdding.trim(), completed: false });
    setTodoAdding("");
  };

  return (
    <form className="flex gap-2" onSubmit={add}>
      <div className="flex-1 relative">
        <input
          type="text"
          placeholder="Add a new task..."
          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-400"
          value={todoAdding}
          onChange={(e) => setTodoAdding(e.target.value)}
          maxLength={200}
        />
        {todoAdding && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">
            {todoAdding.length}/200
          </div>
        )}
      </div>
      <button
        type="submit"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all duration-200 shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        disabled={!todoAdding.trim()}
      >
        <FaPlus className="w-4 h-4" />
        Add Task
      </button>
    </form>
  );
}

export default TodoForm;
