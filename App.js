import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 id="title" className="title">
    Harsh Bamaniya
  </h1>
);

const HeadingComponent = () => {
  return (
    <div>
      {Title()}
      <Title></Title>
      <h1>React Functional Component</h1>
      <Title />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
