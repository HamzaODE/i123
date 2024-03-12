import React, { useState } from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepTwo = ({ routeHandler }) => {
  const [fname, setFName] = useLocalSave("firstName", "");
  const [dob, setDob] = useLocalSave("DOB", "");
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!dob.match(/^\d{4}-\d{2}-\d{2}$/)) {
      setError("Please enter a valid date of birth (YYYY-MM-DD).");
      return;
    }
    setError("");
    routeHandler("/personal/medical?question=3");
  };

  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>{fname} What is your date of birth?</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10">
          <input
            type="date"
            placeholder="Date Of Birth (YYYY-MM-DD)"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
            pattern="\d{4}-\d{2}-\d{2}"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div className="primary-btn">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepTwo;
