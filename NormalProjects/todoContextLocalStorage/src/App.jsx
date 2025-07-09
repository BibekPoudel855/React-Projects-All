import { useEffect, useState } from "react";
import { ToDoProvider } from "./context";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { FaClipboardList } from "react-icons/fa";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos && savedTodos.length) {
      setTodos(savedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addToDo = (todo) => {
    setTodos((prev) => {
      return [{ id: Date.now(), ...todo }, ...prev];
    });
  };
  const updateToDo = (id, updatedTodo) => {
    setTodos((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return updatedTodo;
        }
        return item;
      });
    });
  };

  const deleteToDo = (id) => {
    setTodos((prev) => {
      return prev.filter((item) => {
        return item.id != id;
      });
    });
  };

  const toggleComplete = (id) => {
    setTodos((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
    });
  };


  // data like pending, completed, total todos
  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const pendingTodos = totalTodos - completedTodos;

  return (
    <>
      <ToDoProvider
        value={{
          todos,
          addToDo,
          updateToDo,
          deleteToDo,
          toggleComplete,
        }}
      >
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto bg-white shadow-xl rounded-2xl px-6 py-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Task Manager
              </h1>
              <p className="text-gray-600">
                Organize your tasks efficiently and stay productive
              </p>
            </div>

            {/* Statistics */}
            {totalTodos > 0 && (
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {totalTodos}
                  </div>
                  <div className="text-sm text-blue-600">Total Tasks</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">
                    {completedTodos}
                  </div>
                  <div className="text-sm text-green-600">Completed</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-orange-600">
                    {pendingTodos}
                  </div>
                  <div className="text-sm text-orange-600">Pending</div>
                </div>
              </div>
            )}

            <div className="mb-6">
              <TodoForm />
            </div>
            <div className="space-y-3">
              {todos.length === 0 ? (
                <div className="text-center py-12">
                  <FaClipboardList className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500 text-lg">No tasks yet</p>
                  <p className="text-gray-400 text-sm">
                    Add your first task to get started!
                  </p>
                </div>
              ) : (
                todos.map((todo) => {
                  return (
                    <div key={todo.id}>
                      <TodoItem todo={todo} />
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </ToDoProvider>
    </>
  );
}
export default App;
