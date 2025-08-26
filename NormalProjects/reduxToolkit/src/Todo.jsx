import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "./redux/todoSlice";
function Todo() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => {
    console.log(state);
    
    return state.todoReducer.todos;
  });
  return (
    <>
      <div className="text-center">Todo</div>
      <div className="text-center bg-green-400">
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <p>{todo.title}</p>
              <button
                onClick={() => {
                  dispatch(removeTodo(todo.id));
                }}
              >
                delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Todo;
