import { useState } from "react";
import css from "./../css/AddToDo.module.css";
import Error from "./../components/Error";
function AddToDo({ handleAddTodo }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  function handleInputTodoName(e) {
    setTodoName(e.target.value);
  }
  function handleInputTodoDate(e) {
    setTodoDate(e.target.value);
  }
  return (
    <div className="row">
      <div className="col-6">
        <input
          type="text"
          id="taskName"
          className="form-control form-control-lg rounded-3 shadow-sm"
          placeholder="Enter task name..."
          value={todoName}
          onChange={handleInputTodoName}
        />
      </div>
      <div className="col-4">
        <input
          type="date"
          id="dueDate"
          className="form-control form-control-lg rounded-3 shadow-sm"
          value={todoDate}
          onChange={handleInputTodoDate}
        />
      </div>
      <div className="col-2">
        <button
          type="submit"
          className="btn btn-success btn-lg w-100 rounded-3 fw-semibold shadow-sm"
          onClick={() => {
            if (!todoName.trim() || !todoDate.trim()) {
              alert("Please enter both task name and due date.");
              return;
            }
            handleAddTodo(todoName, todoDate);
            setTodoName("");
            setTodoDate("");
          }}
        >
          Add Task
        </button>
      </div>
    </div>
  );
}

export default AddToDo;
