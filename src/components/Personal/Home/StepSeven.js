import React, { useState } from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepSeven = ({ routeHandler }) => {
  const [sqft, setSqft] = useLocalSave("sqft", "");
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!validateInput()) {
      return;
    }
    routeHandler("/personal/home?question=8");
  };

  const validateInput = () => {
    if (!sqft || isNaN(sqft) || sqft <= 0) {
      setError("Please enter a valid square footage.");
      return false;
    }
    setError("");
    return true;
  };

  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>And what is the square footage of this home?</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10">
          <input
            placeholder="Square Footage"
            value={sqft}
            onChange={(e) => setSqft(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />
          
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
