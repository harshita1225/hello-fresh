import { createContext, useReducer } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const initialState = {
    user: {},
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "login":
        return {
          ...state,
          user: { ...action.payload },
        };

      case "test":
        return;
      default:
        return;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
