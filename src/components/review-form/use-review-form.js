import { useCallback } from "react";
import { useReducer } from "react";

const INITIAL_VALUE = {
  name: "",
  text: "",
  rating: 1,
};

// action: {type: string, payload: any}
const reducer = (state, { type, payload }) => {
  switch (type) {
    case "setName":
      return {
        ...INITIAL_VALUE,
        name: payload,
      };
    case "setText":
      return {
        ...state,
        text: payload,
      };
    case "setRating":
      return {
        ...state,
        rating: payload,
      };

    default:
      return state;
  }
};

export const useReviewForm = (initialValue = INITIAL_VALUE) => {
  const [form, dispatch] = useReducer(reducer, initialValue);

  const setName = useCallback(
    (event) => dispatch({ type: "setName", payload: event.target.value }),
    []
  );

  const name = form.name;
  const setText = useCallback(
    (event) => {
      if (name) {
        dispatch({ type: "setText", payload: event.target.value });
      }
    },
    [name]
  );

  const setRating = useCallback(
    (event) => dispatch({ type: "setRating", payload: event.target.value }),
    []
  );

  return {
    form,
    setName,
    setText,
    setRating,
  };
};