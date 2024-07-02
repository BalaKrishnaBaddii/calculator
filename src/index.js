import React from "react";
import reactDom from "react-dom/client";
import Calculator from "./calculator";

const root = reactDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
);
