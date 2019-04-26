import React from "react";

function Number({ value, vOnC }) {
  const { valueOnScreen, setValueOnScreen } = vOnC;
  return (
    <button
      onClick={() => {
        if (valueOnScreen === undefined) setValueOnScreen(value);
        else setValueOnScreen(valueOnScreen + value);
      }}
    >
      {value}
    </button>
  );
}

export default Number;
