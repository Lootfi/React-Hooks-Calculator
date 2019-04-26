import React, { useState } from "react";
import ReactDOM from "react-dom";
import Display from "./Display";
import Number from "./Number";
import Operator from "./Operator";
import "./styles.css";

function Calculator() {
  const [valueOnScreen, setValueOnScreen] = useState();
  const [operator, setOperator] = useState();
  const [result, setResult] = useState();
  const vOnC = {
    valueOnScreen,
    setValueOnScreen
  };
  const op = {
    operator,
    setOperator
  };
  const res = {
    result,
    setResult
  };
  return (
    <div className="App">
      <Display value={valueOnScreen} />
      <div id="Operators">
        <Number value="7" vOnC={vOnC} />
        <Number value="8" vOnC={vOnC} />
        <Number value="9" vOnC={vOnC} />
        <Operator value="+" vOnC={vOnC} op={op} />

        <Number value="4" vOnC={vOnC} />
        <Number value="5" vOnC={vOnC} />
        <Number value="6" vOnC={vOnC} />
        <Operator value="-" vOnC={vOnC} op={op} />

        <Number value="1" vOnC={vOnC} />
        <Number value="2" vOnC={vOnC} />
        <Number value="3" vOnC={vOnC} />
        <Operator value="*" vOnC={vOnC} op={op} />

        <Operator value="+/-" vOnC={vOnC} op={op} />
        <Number value="0" vOnC={vOnC} />
        <Operator value="C" vOnC={vOnC} op={op} />
        <Operator value="/" vOnC={vOnC} op={op} />

        <Operator value="=" vOnC={vOnC} op={op} />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Calculator />, rootElement);
