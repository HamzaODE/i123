import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepSix = ({ routeHandler }) => {
  const [gender, setGender] = useLocalSave("gender", "");

  const handleMaleClick = () => {
    setGender("Male");
    routeHandler("/personal/medical?question=7");
  };

  const handleFemaleClick = () => {
    setGender("Female");
    routeHandler("/personal/medical?question=7");
  };

  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">Are you a male or female?</p>
      <div className="flex flex-row  gap-4 lg:gap-14 my-10">
        <div className="primary-btn col text-center">
          <button type="button" onClick={handleMaleClick}>Male</button>
        </div>
        <div className="primary-btn col ">
          <button type="button" onClick={handleFemaleClick}>Female</button>
        </div>
      </div>
    </div>
  );
};

export default StepSix;
