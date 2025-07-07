import { createContext, useContext } from "react";

const ToDoContext = createContext({});

const useToDoContext = () => {
  return useContext(ToDoContext);
};

const ToDoProvider = ToDoContext.Provider;

export { useToDoContext, ToDoProvider, ToDoContext };
