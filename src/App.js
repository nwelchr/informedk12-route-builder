import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

import FormContainer from "./components/formContainer";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Add Recipients</h1>
        <p>Who needs to fill out the form?</p>

        <FormContainer />
      </div>
    </div>
  );
}

export default App;
