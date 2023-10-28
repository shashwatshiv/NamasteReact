import React from "react";
import ReactDOM from "react-dom/client";
const container = React.createElement("div",
{   id:"container"},
[
    React.createElement("div",{},[ 
        React.createElement("h1",{id:"hello",style:{color : "red"},},"Hello World from React 🚀"),
        React.createElement("h2",{id:"subtitle"},"My Name is Shashwat")
    ]
 ),
 React.createElement("div",{},[
    React.createElement("h1",{style:{color : "red"}},"Nested Create Elements"),
    React.createElement("h2",{},"Explaining why we need JSX")
 ])
]
)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(container)
