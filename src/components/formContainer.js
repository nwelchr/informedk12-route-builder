import { useState } from "react";

import Step from "./step";
import { Label } from "./common";

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

  const handleRemoveStep = (removeStepId) => {
    setSteps(steps.filter((step) => step.id !== removeStepId));
  };

  return (
    <form>
      <header>
        <Label htmlFor="step">Step</Label>
        <Label htmlFor="recipientInfo">Recipient Info</Label>
      </header>
      {steps.map((step) => (
        <Step key={step.id} step={step} handleRemoveStep={handleRemoveStep} />
      ))}
      <button onClick={handleAddStep}>Add Step</button>
    </form>
  );
};

export default FormContainer;
