import { useDispatch } from "react-redux";
import { addTodo } from "./redux/todoSlice";
import Todo from "./Todo";
function App() {
  const dispatch = useDispatch();
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target);

          const formData = new FormData(e.target);
          const newTodo = formData.get("todo");
          dispatch(addTodo(newTodo));
        }}
      >
        <input
          type="text"
          name="todo"
          placeholder="Add a new todo"
          className="bg-green-100 p-4 rounded-2xl m-100"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-2xl p-2"
        >
          Add Todo
        </button>
      </form>
      <Todo />
    </>
  );
}
export default App;
