import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

if (process.env.NODE_ENV === "development") {
  // @ts-expect-error hot doesnt exist in Node Module
  if (module.hot) {
    // @ts-expect-error hot doesnt exist in Node Module
    module.hot.accept();
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
