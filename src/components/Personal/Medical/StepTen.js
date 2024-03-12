import React, { useState } from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepTen = ({ routeHandler }) => {
  const [aIncome, setAIncome] = useLocalSave("annualIncome", "");
  const [incomeError, setIncomeError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!/^\d+$/.test(aIncome)) {
      setIncomeError("Please enter a valid annual income (digits only).");
      return;
    }
    routeHandler("/personal/medical?question=11");
  };

  const formatIncome = (value) => {
    return `$${value}`;
  };

  const handleIncomeChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove all non-digit characters
    setAIncome(value);
    setIncomeError(""); // Clear error when user starts typing
  };

  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>What is your annual income?</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10">
          <input
            placeholder="Annual Income"
            value={formatIncome(aIncome)}
            onChange={handleIncomeChange}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />
          {incomeError && <span className="text-red-500">{incomeError}</span>}
        </div>
        <div className="primary-btn">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepTen;
