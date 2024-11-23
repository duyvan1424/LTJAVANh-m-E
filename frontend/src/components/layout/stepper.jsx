import React from "react";
import { Stepper, Step, StepLabel } from "@mui/material";
import "./stepper.css";

const steps = ["đặt hàng", "giao hàng", "nhận hàng"];
// const stepCurrent = [1];

const   MyStepper = () => {
  return (
    <div className="stepper">
      <Stepper activeStep={0}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default MyStepper;
