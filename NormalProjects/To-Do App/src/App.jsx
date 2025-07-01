import { useState } from "react";
import AddToDo from "./components/AddToDo";
import MainHeading from "./components/MainHeading";
import TodoItems from "./components/ToDoItems";
import css from "./css/App.module.css";
import "./css/global.css";
import Error from "./components/Error";
function App() {
  const [todoList, setTodoList] = useState([]);
  function handleAddTodo(todoName, todoDate) {
    let newTodoItem = {
      todoName: todoName,
      todoDate: todoDate,
    };
    setTodoList([...todoList, newTodoItem]);
  }
  function handleRemoveTodo(index) {
    const updatedTodoList = todoList.filter((item, i) => {
      if (i !== index) {
        return item;
      }
    });
    setTodoList(updatedTodoList);
  }
  return (
    <center>
      <MainHeading title="To-Do App" />
      <div className="container text-center">
        <AddToDo handleAddTodo={handleAddTodo} />
        <div className={css["items-container"]}>
          {todoList.length === 0 && (
            <Error erroMessage="No tasks available. Please add a task." />
          )}
          {todoList.map((items, index) => {
            return (
              <TodoItems
                todoName={items.todoName}
                todoDate={items.todoDate}
                key={index}
                handleRemoveTodo={handleRemoveTodo}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </center>
  );
}
export default App;
