import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepFourteen = ({ routeHandler }) => {
  const [baseJumping, setBaseJumping] = useLocalSave("baseJumping", "");

  const handleSelection = (value) => {
    setBaseJumping(value);
    routeHandler("/personal/life?question=14");
  };

  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">SKYDIVING</p>
      <p className="text-center">Have you in the past or do you do: BASE Jumping or use a<br />
        wingsuit (birdman suit, bat suit, or flying squirrel suit)?</p>
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

export default StepFourteen;
