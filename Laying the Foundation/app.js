import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
    "h1",
    {id:"hello",
        style:{color : "red"},
        key:"key1",
},
"Hello World from react")
console.log(heading);
const heading2 = React.createElement(
    "h2",
    {id:"subtitle",
        key:"key2"},
    "my name is shashwat"
)
const container = React.createElement("div",
{
    id:"container"
},
[heading,heading2]
)

// JSX 
 const heading3 = (<h1> This is JSX </h1>)
 

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(container)