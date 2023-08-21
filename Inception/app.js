const heading = React.createElement(
    "h1",
    {id:"hello",
        style:{color : "red"},
},
"Hello World from react")
const heading2 = React.createElement(
    "h2",
    {id:"subtitle"},
    "my name is shashwat"
)
const container = React.createElement("div",
{
    id:"container"
},
[heading,heading2]
)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(container)