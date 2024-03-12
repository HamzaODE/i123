import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepFourteen = ({ routeHandler }) => {
  const [towingCoverage, setTowingCoverage] = useLocalSave("towingCoverage", "");

  const handleYesClick = () => {
    setTowingCoverage("Yes");
    routeHandler("/personal/auto?question=10");
  };

  const handleNoClick = () => {
    setTowingCoverage("No");
    routeHandler("/personal/auto?question=10");
  };

  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">Would you like Towing coverage?</p>
      <div className="flex flex-row  gap-4 lg:gap-14 my-10">
        <div className="primary-btn col text-center">
          <button type="button" onClick={handleYesClick}>Yes</button>
        </div>
        <div className="primary-btn col ">
          <button type="button" onClick={handleNoClick}>No</button>
        </div>
      </div>
    </div>
  );
};

export default StepFourteen;
