import { createContext, useContext, useReducer } from "react";

const GlobalContext = createContext(null);

const initialState = {
  user: "Piyush",
  invoices : []
};

function reducer(state, action) {
  switch (action.type) {
    case "addInvoice":
      return { ...state,invoices:[...state.invoices,action.payload] };
    default:
      throw new Error("Action unknow");
  }
}

function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

function useGlobal() {
  const context = useContext(GlobalContext);
  if (context === undefined)
    throw new Error("Context is using out of context provider");

  return context;
}

export { useGlobal, GlobalProvider };
