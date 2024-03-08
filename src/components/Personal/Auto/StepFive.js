import React, { useState } from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepFive = ({ routeHandler }) => {
  const [vin, setVin] = useLocalSave("VIN", "");
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!vin.match(/^[A-HJ-NPR-Z0-9]{17}$/i)) {
      setError("Please enter a valid 17-character VIN.");
      return;
    }
    setError("");
    routeHandler("/personal/auto?question=6");
  };

  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>Great! Let's talk about your cars.</p>
      <b>Vehicle 1 info</b>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10">
        <input
            type="text"
            placeholder="Check VIN"
            value={vin}
            onChange={(e) => {
              const value = e.target.value.replace(/\s/g, '').toUpperCase(); // Remove spaces and convert to uppercase
              if (/^[A-HJ-NPR-Z0-9]{0,17}$/.test(value)) {
                setVin(value);
              }
            }}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
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

export default StepFive;
