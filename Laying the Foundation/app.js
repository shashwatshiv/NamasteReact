import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const container = React.createElement("div", { id: "container" }, [
  React.createElement("div", {}, [
    React.createElement(
      "h1",
      { id: "hello", style: { color: "red" } },
      "Hello World from React 🚀"
    ),
    React.createElement("h2", { id: "subtitle" }, "My Name is Shashwat"),
  ]),
  React.createElement("div", {}, [
    React.createElement(
      "h1",
      { style: { color: "red" } },
      "Nested Create Elements"
    ),
    React.createElement("h2", {}, "Explaining why we need JSX"),
  ]),
]);
// React Using  JSX

const jsxHeading = (
  <h1 className="heading" id="hello">
    React from JSX 🚀
  </h1>
);
// React Functional Components

const HeadingCompnent = () => {
  return <h1>React using functional components.</h1>;
};
// this same thing can be written as

const HeadingComponent2 = () => (
  <h1 className="hello">React using functional components</h1>
);

const Fn = () => true;
const Fn2 = () => {
  return true;
};
// fn and fn 2 are same thing.

// Converting JSX into Functional Component

const JSXHeading = () => (
  <h1 className="heading" id="hello">
    React from JSX Functional Component🚀
  </h1>
);

// Component Composition

const Title = () => (
  <div>
    <JSXHeading />
    <HeadingCompnent />
    <h2>Example of Component Composition</h2>
  </div>
);

// Injecting JS inside JSX (use {} to add JS )
// Injecting React Element inside JSX Functional Component
// Either right the closing tag alone or both the tag, both are same thing.
// You can call Functional Component as normal function inside curly brackets {}
const Title2 = () => (
  <div>
    <JSXHeading />
    <JSXHeading></JSXHeading>
    <HeadingCompnent />

    <h2>Example of Component Composition</h2>
    {100}
    <h3>{4000}</h3>
    {jsxHeading}
    {container}
    {JSXHeading()}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Title2 />);
