import { useState } from "react";

import Step from "./step";

const FormContainer = () => {
  const [steps, setSteps] = useState([
    { id: 1, recipientInfo: { name: "Form Initiator", email: "" } },
  ]);

  const handleAddStep = (e) => {
    e.preventDefault();
    const newStep = {
      id: steps.length + 1,
      recipientInfo: { name: "Unknown", email: "Unknown" },
    };
    setSteps([...steps, newStep]);
  };

  return (
    <form>
      <header>
        <label htmlFor="step">Step</label>
        <label htmlFor="recipientInfo">Recipient Info</label>
      </header>
      {steps.map((step) => (
        <Step key={step.id} step={step} />
      ))}
      <button onClick={handleAddStep}>Add Step</button>
    </form>
  );
};

export default FormContainer;
