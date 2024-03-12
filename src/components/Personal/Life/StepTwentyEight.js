import { useState } from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepTwentyEight = ({ routeHandler }) => {
  const [motorRacingType, setMotorRacingType] = useLocalSave("motorRacingType", []);
  const [internationalEvents, setInternationalEvents] = useLocalSave("internationalEvents", []);

  const handleSelection = (value) => {
    setInternationalEvents(value);
    routeHandler("/personal/life?question=29");
  };

  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">MOTOR RACING Type: {motorRacingType}</p>
      <p className="text-center">Do you participate in international events?</p>
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

export default StepTwentyEight;
