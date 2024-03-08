import React from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThreeA from "./StepThreeA";
import StepThreeB from "./StepThreeB";
import StepThreeC from "./StepThreeC";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import StepSix from "./StepSix";
import StepSeven from "./StepSeven";
import { useLocation, useNavigate } from "react-router-dom";
import Steps from "../../ui/Steps";

const questionsMap = {
  1: StepOne,
  2: StepTwo,
  3: [[StepThreeA,() => localStorage.getItem('business') === 'IT'], [StepThreeB, () => localStorage.getItem('business') === 'Accounts Office'], [StepThreeC, () => localStorage.getItem('business') === 'Attorney Offices']],
  4: StepFour,
  5: StepFive,
  6: StepSix,
  7: StepSeven,
};

const GetQuote = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const question = queryParams.get("question");
  const totalQuestions = Object.keys(questionsMap);
  const routeHandler = (newRoute) => {
    navigate(newRoute);
  };


  const getConditionalComponent = (componentsArray) => {
    for (let [Component, condition] of componentsArray) {
      if (condition) {
        return Component;
      }
    }
    return null;
  };

  const currentQuestion = questionsMap[question];
  const Component =
    Array.isArray(currentQuestion) && currentQuestion.length > 0
      ? getConditionalComponent(currentQuestion)
      : currentQuestion;

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

export default GetQuote;
