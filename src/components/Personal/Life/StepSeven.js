import React, { useState } from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepSeven = ({ routeHandler }) => {
  const [aIncome, setAIncome] = useLocalSave("annualIncome", "");
  const [incomeError, setIncomeError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!/^\d+$/.test(aIncome)) {
      setIncomeError("Please enter a valid annual income (digits only).");
      return;
    }
    routeHandler("/personal/life?question=8");
  };

  const formatAmount = (amount) => {
    return `$${amount}`;
  };

  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>What is your annual household income?</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10">
          <input
            placeholder="Annual Income"
            value={formatAmount(aIncome)}
            onChange={(e) => {
              const inputValue = e.target.value.replace(/\D/g, ''); // Remove all non-digit characters
              setAIncome(inputValue);
              setIncomeError("");
            }}
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

export default StepSeven;
