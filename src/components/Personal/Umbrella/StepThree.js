import React, { useState } from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepTwo = ({ routeHandler }) => {
  const [fname, setFName] = useLocalSave("firstName", "");
  const [zip, setZip] = useLocalSave("zip", "");
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!zip.match(/^\d{5}$/)) {
      setError("Please enter a valid 5-digit zip code.");
      return;
    }
    setError("");
    routeHandler("/personal/umbrella?question=4");
  };

  const handleZipChange = (e) => {
    const { value } = e.target;
    if (!value.match(/^\d*$/)) {
      return;
    }
    setZip(value);
  };

  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>Great! {fname} what is your zip code?</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10">
          <input
            placeholder="Zipcode"
            value={zip}
            onChange={handleZipChange}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
            maxLength="5"
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
