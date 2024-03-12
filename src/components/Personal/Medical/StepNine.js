import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepNine = ({ routeHandler }) => {
  const [usCitizen, setUsCitizen] = useLocalSave("usCitizen", "");

  const submitHandler = (e, answer) => {
    e.preventDefault();
    setUsCitizen(answer);
    routeHandler("/personal/medical?question=10");
  };

  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">Are you a US citizen?</p>
      <div className="flex flex-row gap-4 lg:gap-14 my-10">
        <div className="primary-btn col text-center">
          <button type="submit" onClick={(e) => submitHandler(e, "Yes")}>Yes</button>
        </div>
        <div className="primary-btn col">
          <button type="submit" onClick={(e) => submitHandler(e, "No")}>No</button>
        </div>
      </div>
    </div>
  );
};

export default StepNine;
