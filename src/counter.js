import React from "react";

const counter = ({ value, clickSumar, clickRestar }) => (
  <div>
    <h1>{value}</h1>
    <button onClick={clickSumar}>Sumar</button>
    <button onClick={clickRestar}>Restar</button>
  </div>
);

export default counter;
