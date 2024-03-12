import React, { useState } from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepTwentyFour = ({ routeHandler }) => {
  const [raceSpecify, setRaceSpecify] = useLocalSave("raceSpecify", "");
  const [activities, setActivities] = useLocalSave("motorRacingType", []);
  const [errorMessage, setErrorMessage] = useState("");

  const validate = () => {
    if (!raceSpecify.trim()) {
      setErrorMessage("Please specify your race type");
      return false;
    }
    return true;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validate()) {
      routeHandler("/personal/life?question=25");
    }
  };

  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>MOTOR RACING: {activities}</p>
      <p>How many children do you have?</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10">
          <input
            type="text"
            placeholder="Please specify"
            value={raceSpecify}
            onChange={(e) => setRaceSpecify(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />
        </div>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <div className="primary-btn">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepTwentyFour;
