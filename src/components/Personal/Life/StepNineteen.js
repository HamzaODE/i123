import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepNineteen = ({ routeHandler }) => {
  const [certification, setCertification] = useLocalSave("openWaterCertification", "");

  const handleCertification = (value) => {
    setCertification(value);
    routeHandler("/personal/life?question=20");
  };

  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">SCUBA DIVING</p>
      <p className="text-center">Do you have your Open Water Certification?</p>
      <div className="flex flex-row  gap-4 lg:gap-14 my-10">
        <div className="primary-btn col text-center">
          <button type="button" onClick={() => handleCertification("Yes")}>Yes</button>
        </div>
        <div className="primary-btn col ">
          <button type="button" onClick={() => handleCertification("No")}>No</button>
        </div>
      </div>
    </div>
  );
};

export default StepNineteen;
