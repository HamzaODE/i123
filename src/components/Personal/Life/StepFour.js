import React, { useState } from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepFour = ({ routeHandler }) => {
  const [streetAddress, setstreetAddress] = useLocalSave("streetAddress", "");
  const [unit, setUnit] = useLocalSave("unit#", "");
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!streetAddress.trim()) {
      setError("Please enter a street address.");
      return;
    }
    if (!unit.trim()) {
      setError("Please enter a unit number.");
      return;
    }
    setError("");
    routeHandler("/personal/life?question=5");
  };

  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>And at what address in Los Angeles</p>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-14 my-10">
          <input
            type="text"
            placeholder="Street"
            value={streetAddress}
            onChange={(e) => setstreetAddress(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />
          <input
            type="text"
            placeholder="Suite/Unit#"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
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

export default StepFour;
