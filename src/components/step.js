const Step = ({ step }) => {
  return (
    <div>
      <label htmlFor="step">{step.id}</label>
      <label htmlFor="recipientInfoName">{step.recipientInfo.name}</label>
      <label htmlFor="recipientInfoEmail">{step.recipientInfo.email}</label>
    </div>
  );
};

export default Step;
