import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import Counter from "./counter";

// Preparamos nuestra funcion reducer
const myReducer = (state, action) => {
  switch (action.type) {
    case "sumar":
      console.log("state.suma: ", state + 1);
      return state + 1;
    case "restar":
      console.log("state.resta: ", state - 1);
      return state - 1;
    default:
      console.log("state.defaul: ", state);
      return state;
  }
};

// Inicializamos el store pasándole el reducer
const store = createStore(myReducer, 100);

// Renderizamos el componente.
// Cada vez que el stado cambie, el componente
// se volverá a renderizar.
const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      clickSumar={() => store.dispatch({ type: "sumar" })}
      clickRestar={() => store.dispatch({ type: "restar" })}
    />,
    document.getElementById("root")
  );
};

store.subscribe(render);
render();
