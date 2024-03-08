import React, { useState } from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepFour = ({ routeHandler }) => {
  const [aPayroll, setAPayroll] = useLocalSave("annualPayroll", "");
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!validatePayroll(aPayroll)) {
      setError("Please select a valid payroll option");
      return;
    }
    routeHandler("/Epli?question=6");
  };

  const validatePayroll = (payroll) => {
    return ["0-1M", "1M-5M", "5M-20M"].includes(payroll);
  };

  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p>What is your estimated annual payroll?</p>
      <form onSubmit={submitHandler}>
        <div className="text-center flex flex-col  gap-4 lg:gap-30 my-10">
          <select
            value={aPayroll}
            onChange={(e) => setAPayroll(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          >
            <option value="">Select Annual Payroll</option>
            <option value="0-1M">0-1M</option>
            <option value="1M-5M">1M-5M</option>
            <option value="5M-20M">5M-20M</option>
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

export default StepFour;
