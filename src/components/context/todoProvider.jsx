import React, { createContext, useReducer } from "react";

export const TodoContext = createContext();
const reducer = (state, action) => {
  if (action.type === "submit") {
    return {
      ...state,
      todos: [...state.todos, action.payload],
    };
  }
  if (action.type === "edit") {
    return {
      ...state,
      editIndex: null,
      todos: state.todos.map((todo, index) => {
        return index === action.payload.index
          ? { title: action.payload.title }
          : todo;
      }),
    };
  }
  if (action.type === "delete") {
    return {
      ...state,
      todos: state.todos.filter((index) => index !== action.payload.index),
    };
  }
  if (action.type === "updateEditIndex") {
    return {
      ...state,
      editIndex: action.index,
    };
  }
  return state;
};

const TodoProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { todos: [], editIndex: null });
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
