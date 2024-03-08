import React, { useState } from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepTwo = ({ routeHandler }) => {
  const [tEmployee, setEmployee] = useLocalSave("totalEmployees ", "");
  const [zip, setZip] = useLocalSave("zip ", "");
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!validateZip(zip)) {
      setError("Zip code must be exactly 5 digits");
      return;
    }
    routeHandler("/GeneralLiability?question=3");
  };

  const validateZip = (zip) => {
    return /^\d{5}$/.test(zip);
  };

  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>How many employees do you have today?</p>
      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={submitHandler}>
        <div className="text-center flex flex-col  gap-4 lg:gap-30 my-10">
          <select
            value={tEmployee}
            onChange={(e) => setEmployee(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          >
            <option value="">Select Number of Employees</option>
            <option value="0-5">0-5</option>
            <option value="6-19">6-19</option>
            <option value="20+">20 or more</option>
          </select>
          <input
            placeholder="Zipcode"
            value={zip}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d{0,5}$/.test(value)) {
                setZip(value);
              }
            }}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />
        </div>
        <div className="primary-btn text-center">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepTwo;
