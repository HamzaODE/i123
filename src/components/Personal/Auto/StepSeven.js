import React, { useState } from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepSeven = ({ routeHandler }) => {
  const [fname, setFName] = useLocalSave("firstName", "");
  const [propertyDamage, setPropertyDamage] = useLocalSave("propertyDamage", "");
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (propertyDamage === "") {
      setError("Please select a limit of coverage.");
      return;
    }
    setError("");
    routeHandler("/personal/auto?question=8");
  };

  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>{fname} what limit of coverage for Bodily Injury & Property Damage would you like?</p>
      <form onSubmit={submitHandler}>
        <div className="  col-sm-4  ">
          <select
            value={propertyDamage}
            onChange={(e) => setPropertyDamage(e.target.value)}
            className="flex justify-center border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          >
            <option value="">Select Limit of Coverage</option>
            <option value="$25,000/$50,000/$25,000">$25,000/$50,000/$25,000</option>
            <option value="$50,000/$100,000/$50,000">$50,000/$100,000/$50,000</option>
            <option value="$100,000/$300,000/$100,000">$100,000/$300,000/$100,000</option>
            <option value="$250,000/$500,000/$100,000">$250,000/$500,000/$100,000</option>
            <option value="$500,000/$500,000/$100,000">$500,000/$500,000/$100,000</option>
          </select>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div className="primary-btn">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepSeven;
