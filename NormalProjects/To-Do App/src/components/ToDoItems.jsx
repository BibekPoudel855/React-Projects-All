import css from "./../css/TodoItems.module.css";
function TodoItems({ todoName, todoDate, handleRemoveTodo, index }) {
  return (
    <div className={`row ${css.row}`}>
      <div className="col-6">
        <p>{todoName}</p>
      </div>
      <div className="col-4">
        <p>{todoDate}</p>
      </div>
      <div className="col-2">
        <button
          type="submit"
          className="btn btn-danger btn-lg w-100 rounded-3 fw-semibold shadow-sm"
          onClick={() => handleRemoveTodo(index)}
        >
          Remove Task
        </button>
      </div>
    </div>
  );
}
export default TodoItems;
