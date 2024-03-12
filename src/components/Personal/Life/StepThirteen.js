import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepThirteen = ({ routeHandler }) => {
  const [recordBreakingAttempts, setRecordBreakingAttempts] = useLocalSave("recordBreakingAttempts", "");

  const handleSelection = (value) => {
    setRecordBreakingAttempts(value);
    routeHandler("/personal/life?question=14");
  };

  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">SKYDIVING</p>
      <p className="text-center">Have you in the past or do you intend to participate in any<br />
        record breaking attempts in the future?</p>
      <div className="flex flex-row  gap-4 lg:gap-14 my-10">
        <div className="primary-btn col text-center">
          <button type="button" onClick={() => handleSelection("Yes")}>Yes</button>
        </div>
        <div className="primary-btn col ">
          <button type="button" onClick={() => handleSelection("No")}>No</button>
        </div>
      </div>
    </div>
  );
};

export default StepThirteen;
