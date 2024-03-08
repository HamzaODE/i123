import React, { useState } from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepFour = ({ routeHandler }) => {
  const [fname, setFName] = useLocalSave("firstName", "");
  const [cname, setCName] = useLocalSave("companyName", "");
  const [cZip, setCZip] = useLocalSave("companyZip", "");
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!validateZipCode(cZip)) {
      setError("Please enter a valid ZIP code");
      return;
    }
    routeHandler("/GeneralLiability?question=8");
  };

  const validateZipCode = (zip) => {
    return /^\d{5}$/.test(zip);
  };

  return (
    <div className="text-Center text-[30px] font-light text-black">
      <p>Thanks {fname}. What is {cname}'s ZIP Code?</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center lg:flex-row gap-4 lg:gap-30 my-10">
          <input
            placeholder='zipcode'
            value={cZip}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d{0,5}$/.test(value)) {
                setCZip(value);
              }
            }}
            className={`border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ${error ? 'border-red-500' : ''}`}
            required
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div className="primary-btn text-center">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepFour;
