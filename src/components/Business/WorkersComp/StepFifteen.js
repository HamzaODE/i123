import React, { useState } from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepFifteen = ({ routeHandler }) => {
  const [oName, setOName] = useLocalSave("ownerName", "");
  const [percentage, setPercentage] = useLocalSave("ownership%", "");
  const [percentageError, setPercentageError] = useState("");

  const handlePercentageChange = (e) => {
    const value = e.target.value;
    setPercentage(value);
    setPercentageError("");
  };

  const validate = () => {
    let isValid = true;

    if (!oName) {
      // Validate name of owner
      // Example: Check if the input is not empty
      // You can add more specific validation logic here if needed
      isValid = false;
    }

    if (!percentage || !/^(\d{1,2}|100)%$/.test(percentage)) {
      // Validate percentage of ownership
      // Example: Check if the input is a valid percentage value (1-100%)
      setPercentageError("Please enter a valid percentage value (1-100%).");
      isValid = false;
    }

    return isValid;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validate()) {
      routeHandler("/WorkersComp?question=16");
    }
  };

  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">Lastly, What is the names of owners and % of ownership?</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10">
          <input
            placeholder="Name Of Owner"
            value={oName}
            onChange={(e) => setOName(e.target.value)}
            className="text-Left border-[#646498] border-[1px] rounded-2xl px-20 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />
          <select
            value={percentage}
            onChange={handlePercentageChange}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          >
            <option value="">% of Ownership</option>
            <option value="5%">5%</option>
            <option value="10%">10%</option>
            <option value="15%">15%</option>
            <option value="20%">20%</option>
            <option value="25%">25%</option>
            <option value="30%">30%</option>
            <option value="35%">35%</option>
            <option value="40%">40%</option>
            <option value="45%">45%</option>
            <option value="50%">50%</option>
            <option value="55%">55%</option>
            <option value="60%">60%</option>
            <option value="65%">65%</option>
            <option value="70%">70%</option>
            <option value="75%">75%</option>
            <option value="80%">80%</option>
            <option value="85%">85%</option>
            <option value="90%">90%</option>
            <option value="95%">95%</option>
            <option value="100%">100%</option>
          </select>
        </div>
        {percentageError && <p className="text-red-500">{percentageError}</p>}
        <div className="primary-btn text-center">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepFifteen;
