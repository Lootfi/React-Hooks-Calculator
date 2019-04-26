import React from "react";

function Operator({ value, vOnC, op }) {
  const { valueOnScreen, setValueOnScreen } = vOnC;
  const { operator, setOperator } = op;
  function handleClear() {
    setValueOnScreen();
  }

  return (
    <button
      className="operator"
      onClick={() => {
        if (value === "C") {
          handleClear();
        } else if (value === "+/-") {
          setValueOnScreen(-valueOnScreen);
          return;
        } else if (value === "=") {
        } else {
        }
      }}
    >
      {value}
    </button>
  );
}

export default Operator;
