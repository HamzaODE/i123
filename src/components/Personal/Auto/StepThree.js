import React, { useState } from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepTwo = ({ routeHandler }) => {
  const [fname, setFName] = useLocalSave("firstName", "");
  const [zip, setZip] = useLocalSave("zip", "");
  const [formValid, setFormValid] = useState(false);

  const validateForm = () => {
    if (zip.length === 5 && /^\d+$/.test(zip)) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 5) {
      setZip(value);
      validateForm();
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/personal/auto?question=4");
  };

  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>Great! {fname} what is your zip code?</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10">
          <input
            placeholder="Zipcode"
            value={zip}
            onChange={handleChange}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />
        </div>
        <div className="primary-btn">
          <button type="submit" >Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepTwo;
