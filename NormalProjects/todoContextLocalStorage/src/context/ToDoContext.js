import { createContext, useContext } from "react";

const ToDoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Sample To-Do",
      completed: false,
    },
  ],
  theme: "light",
  addToDo: (todo) => {},
  deleteToDo: (id) => {},
  updateToDo: (id, todo) => {},
  toggleComplete: (id) => {},
});

const useToDoContext = () => {
  return useContext(ToDoContext);
};

const ToDoProvider = ToDoContext.Provider;

export { useToDoContext, ToDoProvider, ToDoContext };
