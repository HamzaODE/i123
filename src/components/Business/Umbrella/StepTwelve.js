import React, { useState } from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepTwelve = ({ routeHandler }) => {
  const [esales, setESales] = useLocalSave("saleThisYear", "");
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    routeHandler("/Umbrella?question=13");
  };

  const validateForm = () => {
    if (!/^\d+$/.test(esales.trim())) {
      setError("Please enter a valid number");
      return false;
    }
    setError("");
    return true;
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    // Remove any non-numeric characters
    const numericValue = value.replace(/\D/g, "");
    // Display $ sign only if the value is not empty
    setESales(numericValue !== "" ? "$" + numericValue : "");
  };

  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">What is your estimated sales amount for this year?</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center  gap-4 lg:gap-14 my-10">
          <input
            type="text"
            placeholder="$"
            value={esales}
            onChange={handleInputChange}
            onBlur={() => {
              // Remove $ sign when the input loses focus
              setESales(esales.replace("$", ""));
            }}
            className={`col-sm-4 border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ${error ? 'border-red-500' : ''}`}
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

export default StepTwelve;
