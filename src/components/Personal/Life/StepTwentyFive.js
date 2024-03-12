import React, { useState } from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepTwentyFive = ({ routeHandler }) => {
  const [activities, setActivities] = useLocalSave("motorRacingType", "");
  const [engineSize, setEngineSize] = useLocalSave("engineSize", "");
  const [errorMessage, setErrorMessage] = useState("");

  const validate = () => {
    if (!engineSize.trim()) {
      setErrorMessage("Please specify your engine size");
      return false;
    }
    return true;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validate()) {
      routeHandler("/personal/life?question=26");
    }
  };

  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>MOTOR RACING: {activities}</p>
      <p>What is the size of the engine of the motorcycle you ride?</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10">
          <select
            value={engineSize}
            onChange={(e) => setEngineSize(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          >
            <option value=""></option>
            <option value="CC250andlower">up to 250 c.c.</option>
            <option value="CC251to450">251 to 450 c.c.</option>
            <option value="CC450over">over 450 c.c.</option>
          </select>
        </div>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <div className="primary-btn">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepTwentyFive;
