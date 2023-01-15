import React from "react";
import ReactDOM from "react-dom/client";
import Button from "./src/components/Button";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      This is a test
      <Button label="This is test" />
    </div>
  </React.StrictMode>
);

//need to move to src once ready for testing...