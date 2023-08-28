import styled from "styled-components";

import { Label } from "./common";

const StepContainer = styled.section`
  display: flex;
  padding: 10px;
`;

const Step = ({ step, handleRemoveStep }) => {
  return (
    <StepContainer>
      <Label htmlFor="step">{step.id}</Label>
      <Label htmlFor="recipientInfoName">{step.recipientInfo.name}</Label>
      <Label htmlFor="recipientInfoEmail">{step.recipientInfo.email}</Label>
      <button onClick={() => handleRemoveStep(step.id)}>Remove</button>
    </StepContainer>
  );
};

export default Step;
