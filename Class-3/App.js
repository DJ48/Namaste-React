import React from "react";
import ReactDOM from "react-dom";

//Create React Element
const heading = React.createElement("h1", {}, "Namaste React");

//Create heading element using JSX
// JSX => React.createElement => React Element (JS obj) => HTML Element (render)
// Babel is converting JSX code to React Element
const jsxHeading = (
  <h1 className="haed" tabIndex={5}>
    Namaste React using JSX
  </h1>
);

//React Functional Components

const Heading2 = () => {
  return <h1 className="head">Namaste React by Akshay Saini</h1>;
};
const NewHeading = () => (
  <h1 className="head">Namaste React by Akshay Saini</h1>
);

// These are the ways to write anonymous fn in js.
// if you want to return a single value you can simply go with 2nd syntax



const Title = () => {
  return <h1>This is the Title.</h1>
}

const number1 = 1000;
const number2 = 2000;

//This is known as Component Composing (adding components)
const Container = () => (
  <div>
    <Title/>
    <h2>This is a h2 Tag.</h2>
    {/* You can execute any JS code inside {} */}
    <h3>{number1 + number2 }</h3>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Container />);
