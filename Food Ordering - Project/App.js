import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", null, "This is heading 1"),
    React.createElement("p", null, "This is paragraph 1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", null, "This is heading 2"),
    React.createElement("p", null, "This is paragraph 2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
