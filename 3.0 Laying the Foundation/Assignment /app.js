// Create a Header Component from scratch using Functional Component with JSX
/*  Add a Logo on Left
    Add a search bar in middle
    Add User icon on right
    Add CSS to make it look nice 
*/
import React from "react";
import ReactDOM from "react-dom/client";
const Header = () => {
  return (
    <div className="container">
      <div>
        <img src="" alt="logo" />
      </div>
      <div>sdsds</div>
      <div>jlksdjs</div>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
