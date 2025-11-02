import React from "react";
import ReactDOM from "react-dom/client";

console.log("✅ App.js loaded");

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child", key: "child-1" }, [
    React.createElement("h1", { key: "c1-h1" }, "I love coding🚀"),
    React.createElement("h2", { key: "c1-h2" }, "Lovely !"),
  ]),
  React.createElement("div", { id: "child2", key: "child-2" }, [
    React.createElement("h1", { key: "c2-h1" }, "Arey Bhai!!"),
    React.createElement("h2", { key: "c2-h2" }, "I  in the D folder"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
