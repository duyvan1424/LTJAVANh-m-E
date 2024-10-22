import React from "react";
import { Stepper, Step, StepLabel } from "@mui/material";
import "./stepper.css";

const steps = ["đặt hàng", "giao hàng", "nhận hàng"];

const MyStepper = () => {
  return (
    <div className="stepper">
      <Stepper orientation="vertical" activeStep={1}>
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
