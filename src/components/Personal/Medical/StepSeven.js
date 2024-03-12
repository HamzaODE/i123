import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepSeven = ({ routeHandler }) => {
  const [maritalStatus, setMaritalStatus] = useLocalSave("maritalStatus", "");

  const handleMarriedClick = () => {
    setMaritalStatus("Married");
    routeHandler("/personal/medical?question=8");
  };

  const handleSingleClick = () => {
    setMaritalStatus("Single");
    routeHandler("/personal/medical?question=8");
  };

  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">Are you married or single?</p>
      <div className="flex flex-row  gap-4 lg:gap-14 my-10">
        <div className="primary-btn col text-center">
          <button type="button" onClick={handleMarriedClick}>Married</button>
        </div>
        <div className="primary-btn col ">
          <button type="button" onClick={handleSingleClick}>Single</button>
        </div>
      </div>
    </div>
  );
};

export default StepSeven;
