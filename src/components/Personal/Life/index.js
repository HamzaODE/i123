import React from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import StepSix from "./StepSix";
import StepSeven from "./StepSeven";
import StepEight from "./StepEight";
import StepNine from "./StepNine";
import StepTen from "./StepTen";
import { useLocation, useNavigate } from "react-router-dom";
import Steps from "../../../ui/Steps";

const questionsMap = {
  1: StepOne,
  2: StepTwo,
  3: StepThree,
  4: StepFour,
  5: StepFive,
  6: StepSix,
  7: StepSeven,
  8: StepEight,
  9: StepNine,
  10: StepTen,
};

const Life = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const question = queryParams.get("question");
  const Component = questionsMap[question];
  const totalQuestions = Object.keys(questionsMap);
  const routeHandler = (newRoute) => {
    navigate(newRoute);
  };

  return (
    <div className="relative min-h-[50vh] pt-20">
      <div className="flex flex-col md:flex-row gap-4 my-12 justify-center items-center">
        <Steps question={question} totalQuestions={totalQuestions} />
      </div>
      <div className="flex flex-col justify-center items-center py-4">
        <Component routeHandler={routeHandler} />
      </div>
    </div>
  );
};

export default Life;
