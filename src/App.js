import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

import FormContainer from "./components/formContainer";

function App() {
  return (
    <div className="app">
      <h1>Add Recipients</h1>
      <p>Who needs to fill out the form?</p>
      <FormContainer />
    </div>
  );
}

export default App;
