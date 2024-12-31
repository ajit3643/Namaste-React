// Create a new element using JavaScript!

// const welcome = document.getElementById("root");
// const heading = document.createElement("h1");
// heading.textContent = "Welcome to the Inception guide!";
// welcome.appendChild(heading);

// Create a new element using react
/*
 const root = document.getElementById("root");
 const heading = React.createElement("h1",{ id: "heading" },
 "Welcome to the Inception guide by - Code with Ajit");

  ReactDOM.render(heading, root);

 */

// Create nested elements using React

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement(
      "h1",
      { id: "heading" },
      "Welcome to the Inception guide by - Code with Ajit"
    ),
    React.createElement("h2", { id: "sub-heading" }, "This is a sub-heading"),
    React.createElement("p", { id: "paragraph" }, "This is a paragraph"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h2", { id: "heading" }, "This is another heading"),
    React.createElement("p", { id: "paragraph" }, "This is another paragraph"),
  ]),
]);
