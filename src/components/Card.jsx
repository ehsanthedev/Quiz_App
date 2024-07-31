import React, { useContext } from "react";
import { TodoContext } from "./context/todoProvider";

const Card = () => {
  const { state, dispatch } = useContext(TodoContext);
  const editHandler = (index) => {
    dispatch({
      type: "updateEditIndex",
      index,
    });
  };
  const deleteHandler = (index) => {
    dispatch({
      type: "delete",
      payload: {
        index,
      },
    });
  };
  return (
    <>
      {state.todos.map((todo, index) => {
        return (
          <div
            key={index}
            className="border-2 border-gray-200 p-2 w-full sm:w-[49%] md:w-[32%] lg:w-[24%] rounded-2xl flex flex-col  justify-between my-3"
          >
            <p className="text-xl text-center">{todo.title}</p>
            <div className="buttons flex justify-center gap-10 mt-9">
              <button
                onClick={() => editHandler(index)}
                className="border-2 w-full rounded-xl bg-green-500 text-white p-1"
              >
                Edit
              </button>
              <button
                onClick={() => deleteHandler(index)}
                className="border-2 w-full rounded-xl bg-red-600 text-white p-1"
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
