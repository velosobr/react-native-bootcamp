import React from "react";
import { render } from "react-dom";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = (props) => {
  return (
    <div style={styles}>
      <h2>{props.count}</h2>
    </div>
  );
};

const rootElement = document.getElementById("root");
var count = 0;
setInterval(() => {
  render(<App count={count++} />, rootElement);
}, 1000);
