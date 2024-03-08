import React from "react";
import StepOne from "./StepOne";
import { useLocation, useNavigate } from "react-router-dom";
import Steps from "../../ui/Steps";

const questionsMap = {
  1: StepOne,
};

const PersonalUmbrella = () => {
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

export default PersonalUmbrella;