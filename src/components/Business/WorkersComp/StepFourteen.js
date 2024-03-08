import React, { useState } from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepFourteen = ({ routeHandler }) => {
  const [tax, setTax] = useLocalSave("federalTaxID", "");
  const [taxError, setTaxError] = useState("");

  const validateTaxID = (taxID) => {
    // Federal Tax ID format validation logic
    const taxIDPattern = /^[0-9]{2}-[0-9]{7}$/;
    return taxIDPattern.test(taxID);
  };

  const handleTaxChange = (e) => {
    const value = e.target.value;
    setTax(value);
    if (!validateTaxID(value)) {
      setTaxError("Please enter a valid Federal Tax ID (00-0000000 format).");
    } else {
      setTaxError("");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validateTaxID(tax)) {
      routeHandler("/WorkersComp?question=15");
    } else {
      setTaxError("Please enter a valid Federal Tax ID (00-0000000 format).");
    }
  };

  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">What is 's Federal Tax ID number?</p>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col  gap-4 lg:gap-14 my-10">
          <input
            placeholder="Federal Tax ID"
            value={tax}
            onChange={handleTaxChange}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />
          {taxError && <p className="text-red-500">{taxError}</p>}
        </div>
        <div className="primary-btn text-center">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepFourteen;
