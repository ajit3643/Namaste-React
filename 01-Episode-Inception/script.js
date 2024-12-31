// Create a new element using JavaScript!

// const welcome = document.getElementById("root");
// const heading = document.createElement("h1");
// heading.textContent = "Welcome to the Inception guide!";
// welcome.appendChild(heading);

// Create a new element using react

const root = document.getElementById("root");
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Welcome to the Inception guide by - Code with Ajit"
);
ReactDOM.render(heading, root);
