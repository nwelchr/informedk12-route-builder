import { useState } from "react";

import Step from "./step";
import { Label } from "./common";

const FormContainer = () => {
  const [steps, setSteps] = useState([
    { id: 1, recipientInfo: { name: "Form Initiator", email: "" } },
  ]);

  const [isFormCompleted, setIsFormCompleted] = useState(false);

  const handleAddStep = () => {
    const newStep = {
      id: steps.length + 1,
      recipientInfo: { name: "Unknown", email: "Unknown" },
    };
    setSteps([...steps, newStep]);
  };

  const handleRemoveStep = (removeStepId) => {
    console.log(removeStepId);
    const newSteps = steps
      .filter((step) => step.id !== removeStepId)
      .map((step, index) => ({ ...step, id: index + 1 }));
    setSteps(newSteps);
  };

  const handleSubmit = () => {
    setIsFormCompleted(true);
  };

  return isFormCompleted ? (
    <div>
      <h1>Form Completed</h1>
      <p>Here are all the steps:</p>
      {steps.map((step) => (
        <div>{step.id}</div>
      ))}
    </div>
  ) : (
    <>
      <h1>Add Recipients</h1>
      <h3>Who needs to fill out the form?</h3>
      <form onSubmit={handleSubmit}>
        <header>
          <Label htmlFor="step">Step</Label>
          <Label htmlFor="recipientInfo">Recipient Info</Label>
        </header>
        {steps.map((step) => (
          <Step key={step.id} step={step} handleRemoveStep={handleRemoveStep} />
        ))}
        <button type="button" onClick={handleAddStep}>
          Add Step
        </button>
        <button type="submit">Continue</button>
      </form>
    </>
  );
};

export default FormContainer;
