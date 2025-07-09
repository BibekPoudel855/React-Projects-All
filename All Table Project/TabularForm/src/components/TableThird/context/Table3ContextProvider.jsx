import { createContext, useContext } from "react";

const Table3Context = createContext();

// custom hook to use the context
function useTable3Context() {
  return useContext(Table3Context);
}

function Table3ContextProvider({ children }) {
  return <Table3Context.Provider value={{}}>{children}</Table3Context.Provider>;
}

export default Table3ContextProvider;
export { useTable3Context, Table3ContextProvider };
