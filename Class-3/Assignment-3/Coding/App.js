import React from "react";
import ReactDOM from "react-dom";

// Create Nested header element using React.createElement(h1,h2,h3 inside div
// with class title)

const headerElement = React.createElement("div", { className: "title" }, [
  React.createElement("h1", {}, "H1 Tag"),
  React.createElement("h2", {}, "H2 tag"),
  React.createElement("h3", {}, "This is simple react element"),
]);

const root = ReactDOM.createRoot(document.getElementById("task-1"));
root.render(headerElement);

//Create same with JSX

const jsxHeadingElement = (
  <div className="title">
    <h1>H1 tag using JSX Element.</h1>
    <h2>H2 tag using JSX Element.</h2>
    <h3>This is a JSX Element</h3>
  </div>
);

const task2 = ReactDOM.createRoot(document.getElementById("task-2"));
task2.render(jsxHeadingElement);

// Functional Component of the same JSX
const HeaderComponent = () => {
  return (
    <div className="title">
      <h1 className="h1tag">H1 Tag using Functional Component.</h1>
      <h2 className="h2tag">H2 Tag using Functional Component.</h2>
      <h3 className="h3tag">This is a functional Component.</h3>
    </div>
  );
};

const task3 = ReactDOM.createRoot(document.getElementById("task-3"));
task3.render(<HeaderComponent />);

//Composition of Components
const FooterComponent = (props) => (
  <div className="footer">
    <h1>Hi, I am footer</h1>
    <div>{props.children}</div>
  </div>
);

const containerElement = (
  <div className="container2">
    <HeaderComponent />
    {headerElement}
    <FooterComponent>
      <h3>Another random text.</h3>
    </FooterComponent>
  </div>
);

const task4 = ReactDOM.createRoot(document.getElementById("task-4"));
task4.render(containerElement);

// Create Header component from scratch using fuctional component in Jsx
// Add Logo on left
// Add a searchBar in Middle
// Add userIcon on right
// Add CSS to look nice

const HeaderComponent2 = () => {
  return (
    <div className="container">
      <img
        src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg"
        id="logo"
      ></img>
      <form action="/search" method="GET" id="seacrh-bar">
        <input type="text" name="query" placeholder="Search..." />
        <input type="submit" defaultValue="Search" />
      </form>
      <p id="icon">
        <i class="fas fa-user"></i>
      </p>
    </div>
  );
};

const task5 = ReactDOM.createRoot(document.getElementById("task-5"));
task5.render(<HeaderComponent2 />);
