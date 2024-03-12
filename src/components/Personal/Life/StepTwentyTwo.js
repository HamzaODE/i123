import { useState } from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepTwentyTwo = ({ routeHandler }) => {
  const [motorRacingType, setMotorRacingType] = useLocalSave("motorRacingType", []);
  const [professionOrAmateur, setProfessionOrAmateur] = useLocalSave("professionOrAmateur", []);

  const handleSelection = (value) => {
    setProfessionOrAmateur(value);
    routeHandler("/personal/life?question=23");
  };

  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">MOTOR RACING Type: {motorRacingType}</p>
      <p className="text-center">Do you participate in professional or amateur racing?</p>
      <div className="flex flex-row  gap-4 lg:gap-14 my-10">
        <div className="primary-btn col text-center">
          <button type="button" onClick={() => handleSelection("PROFESSIONAL")}>PROFESSIONAL</button>
        </div>
        <div className="primary-btn col ">
          <button type="button" onClick={() => handleSelection("AMATEUR")}>AMATEUR</button>
        </div>
      </div>
    </div>
  );
};

export default StepTwentyTwo;
