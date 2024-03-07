import React, { useState, useEffect } from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepTwo = ({ routeHandler }) => {
  const [fname, setFName] = useLocalSave("firstName", "");
  const [dob, setDob] = useLocalSave("DOB", "");
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [dob]);

  const validateForm = () => {
    if (dob.trim() !== "") {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/personal/auto?question=3");
  };

  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>{fname} What is your date of birth?</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10">
          <input
            type="date"
            placeholder="Date Of Birth"
            value={dob}
            onChange={(e) => { setDob(e.target.value); }}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />
        </div>
        <div className="primary-btn">
          <button type="submit" disabled={!formValid}>Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepTwo;
