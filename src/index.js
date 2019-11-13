import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Firebase, { FirebaseContext } from "./components/Firebase";
import Layout from "./components/Layout";

function App() {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <Layout />
    </FirebaseContext.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
