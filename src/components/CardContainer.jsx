import React from "react";

const CardContainer = ({ children }) => {
  return (
    <>
      <div className="  flex justify-around flex-wrap gap-1 p-2">
        {children}
      </div>
    </>
  );
};

export default CardContainer;
