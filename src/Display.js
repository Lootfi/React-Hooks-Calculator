import React from "react";
import numeral from "numeral";
import "./styles.css";
function Display({ value }) {
  return <div id="display">{numeral(value).format("0,0")}</div>;
}

export default Display;
