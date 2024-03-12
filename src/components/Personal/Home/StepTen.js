import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepTen = ({ routeHandler }) => {
  const [hasSwimmingPool, setHasSwimmingPool] = useLocalSave("hasSwimmingPool", "");

  const handleYesClick = () => {
    setHasSwimmingPool("Yes");
    routeHandler("/personal/home?question=11");
  };

  const handleNoClick = () => {
    setHasSwimmingPool("No");
    routeHandler("/personal/home?question=11");
  };

  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">Ok, do you have a swimming pool?</p>
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

export default StepTen;
