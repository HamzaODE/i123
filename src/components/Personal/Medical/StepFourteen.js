import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepFourteen = ({ routeHandler }) => {
  const [qualifyForSubsidy, setQualifyForSubsidy] = useLocalSave("qualifyForSubsidy", "");

  const submitHandler = (e, answer) => {
    e.preventDefault();
    setQualifyForSubsidy(answer);
    routeHandler("/personal/medical?question=15");
  };

  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center"> <b>We are almost done.</b> Would you like to see if you qualify for a low-<br/>income subsidy through the exchange?</p>
      <div className="flex flex-row gap-4 lg:gap-14 my-10">
        <div className="primary-btn col text-center">
          <button type="submit" onClick={(e) => submitHandler(e, "Yes")}>Yes</button>
        </div>
        <div className="primary-btn col ">
          <button type="submit" onClick={(e) => submitHandler(e, "No")}>No</button>
        </div>
      </div>
    </div>
  );
};

export default StepFourteen;
