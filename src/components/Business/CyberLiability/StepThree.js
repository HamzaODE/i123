import React, { useState } from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepThree = ({ routeHandler }) => {
  const [aRevenue, setARevenue] = useLocalSave("annualRevenue", "");
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!validateRevenue(aRevenue)) {
      setError("Please select a valid revenue option");
      return;
    }
    routeHandler("/CyberLiability?question=4");
  };

  const validateRevenue = (revenue) => {
    return ["300k", "500k", "800k", "1M+"].includes(revenue);
  };

  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p>What is your estimated annual revenue?</p>
      <form onSubmit={submitHandler}>
        <div className="text-center flex flex-col  gap-4 lg:gap-30 my-10">
          <select
            value={aRevenue}
            onChange={(e) => setARevenue(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          >
            <option value="">Select Annual Revenue</option>
            <option value="300k">300k</option>
            <option value="500k">500k</option>
            <option value="800k">800k</option>
            <option value="1M+">1M+</option>
          </select>
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <div className="primary-btn text-center">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepThree;
