import { createContext, useReducer, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const initialState = {
    user: {},
    users: [],
    plans: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "login":
        return {
          ...state,
          user: { ...action.payload },
        };
      case "loadPlans":
        return {
          ...state,
          plans: [...action.payload],
        };

      case "addPlan":
        return {
          ...state,
          plans: [...state.plans, action.payload],
        };

      case "removePlan":
        const oldPlans = [
          ...state.plans.filter((item) => item._id !== action.payload),
        ];

        return {
          ...state,
          plans: [...oldPlans],
        };

      case "editPlan":
        const editPlans = [...state.plans];

        const idx = editPlans.findIndex(
          (item) => item._id === action.payload._id
        );

        editPlans[idx] = { ...action.payload };
        console.log("🚀 ~ reducer ~ editPlans", editPlans[idx]);

        return {
          ...state,
          plans: [...editPlans],
        };

      case "logout":
        return {
          user: {},
          users: [],
          products: [],
        };

      default:
        return;
    }
  };
  const [planData, setPlanData] = useState({
    firstname: "",
    lastname: "",
    address: "",
    floor: "",
    city: "",
    zipcode: 0,
    state: "",
    phonenumber: 0,
    planname: [],
    recipeweek: 0,
    numberpeople: 0,
    creditcard: 0,
    cvv: 0,
    price: 0,
    expdate: "",
  });

  console.log(planData);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider
      value={{
        state,
        dispatch,
        planData,
        setPlanData,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
