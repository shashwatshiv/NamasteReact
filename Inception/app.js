const heading = React.createElement(
    "div",{
        id:"heading"
    },[
    React.createElement("h1",{},"hello from nested react element"),
    React.createElement("h2",{},"hello from nested react element")]

);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)