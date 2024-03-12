import React, { useState } from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepEleven = ({ routeHandler }) => {
  const [dwelling, setDwelling] = useLocalSave("dwellingAmount", "");
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!validateInput()) {
      return;
    }
    routeHandler("/personal/home?question=12");
  };

  const validateInput = () => {
    const isValidDollarAmount = /^\d+(\.\d{1,2})?$/.test(dwelling);
    if (!dwelling || !isValidDollarAmount || parseFloat(dwelling) <= 0) {
      setError("Please enter a valid dollar amount for dwelling coverage.");
      return false;
    }
    setError("");
    return true;
  };

  const formatAmount = (amount) => {
    return `$${amount}`;
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value.replace(/[^0-9.]/g, ''); // Remove all characters except digits and decimal point
    setDwelling(inputValue);
  };

  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>How much coverage do you need on the dwelling?</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10">
          <input
            placeholder="Dwelling Amount"
            value={formatAmount(dwelling)}
            onChange={handleInputChange}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <div className="primary-btn">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepEleven;
