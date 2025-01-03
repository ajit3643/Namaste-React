import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Welcome to the Inception guide by - Code with Ajit"
);

root.render(heading);