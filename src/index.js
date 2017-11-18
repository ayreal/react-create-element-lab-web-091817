// Done with Create React App

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const title = React.createElement("h1", {}, "An Awesome Person");
const paragraph = React.createElement("p", {}, "Who is learning React");
const list = React.createElement("ul", { className: "my-interests" }, [
  React.createElement("li", { className: "brown" }, "JavaScript"),
  React.createElement("li", { className: "pink" }, "React"),
  React.createElement("li", { className: "yellow" }, "Movies"),
  React.createElement("li", { className: "yellow" }, "Ice cream")
]);

const list2 = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "My favorite ice cream flavors"),
  React.createElement("ul", {}, [
    React.createElement("li", {}, "Chocolate"),
    React.createElement("li", {}, "Vanilla"),
    React.createElement("li", {}, "Banana")
  ])
);
const container = React.createElement("div", { className: "me" }, [
  title,
  paragraph,
  listA
]);

class App extends Component {
  render() {
    return container;
  }
}

export default App;
