// Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")

import React from "react";
import ReactDOM from "react-dom/client";
const container = React.createElement("div", { className: "title" }, [
  React.createElement("h1", {}, "Hello from h1"),
  React.createElement("h2", {}, "Hello from h2"),
  React.createElement("h3", {}, "Hello from h3"),
]);
// Create the same element using JSX

const jsxHeadings = (
  <div>
    <h1>JSX h1</h1>
    <h2>JSX h2</h2>
    <h3>JSX h3</h3>
  </div>
);
//Create a functional component of the same with JSX
const JSXHeadings = () => (
  <div>
    <h1>JSX H1</h1>
    <h2>JSX H2</h2>
    <h3>JSX H3</h3>
  </div>
);

// Pass attribute into the tag in JSX
// Component Compostion
const Attribute = () => (
  <div>
    <h1 style={{ color: "red" }}>hi</h1>
    <JSXHeadings />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Attribute />);
