import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "./context/todoProvider";

const Form = () => {
  const [title, setTitle] = useState("");
  const { state, dispatch } = useContext(TodoContext);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (state.editIndex !== null) {
      dispatch({
        type: "edit",
        payload: {
          title,
          index: state.editIndex,
        },
      });
    } else {
      dispatch({
        type: "submit",
        payload: {
          title,
        },
      });
    }

    setTitle("");
  };

  useEffect(() => {
    if (state.editIndex !== null) {
      setTitle(state.todos[state.editIndex].title);
    }
  }, [state.editIndex]);
  return (
    <>
      <form className="container d-flex justify-between content-center w-3/5 border-b-2 rounded-lg border-black m-auto h-12 my-10 ">
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="w-4/5 focus:outline-none px-2"
          type="text"
          placeholder="Write Todo Here..."
        />
        <button onClick={onSubmitHandler} className=" w-1/5 h-12">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
