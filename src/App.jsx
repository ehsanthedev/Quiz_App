import React from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Card from "./components/Card";
import CardContainer from "./components/CardContainer";
import TodoProvider from "./components/context/todoProvider.jsx";

const App = () => {
  return (
    <>
      <TodoProvider>
        <Navbar />
        <Form />
        <div className="text-center text-2xl font-semibold">Todo's Here</div>
        <CardContainer>
          <Card />
        </CardContainer>
      </TodoProvider>
    </>
  );
};

export default App;
