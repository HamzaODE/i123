import React, { useState } from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepTwentyOne = ({ routeHandler }) => {
  const [recovery, setRecovery] = useLocalSave("backupColocationRecovery", "");
  const [recoveryError, setRecoveryError] = useState("");

  const handleRecoveryChange = (e) => {
    setRecovery(e.target.value);
    setRecoveryError("");
  };

  const handleOtherRecoveryChange = (e) => {
    setRecovery("Other");
    setRecoveryError("");
  };

  const validate = () => {
    if (!recovery) {
      setRecoveryError("Please select or enter your Backup, co-location, and data recovery.");
      return false;
    }
    return true;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validate()) {
      routeHandler("/CyberLiability?question=22");
    }
  };

  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">What is your Backup, co-location and data recovery</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center gap-4 lg:gap-14 my-10">
          <select
            value={recovery}
            onChange={handleRecoveryChange}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          >
            <option value="">Select your Backup, co-location, and data recovery</option>
            {[
              "ATT",
              "EMC",
              "HP",
              "IBM",
              "Iron Mountain Storage",
              "Tek",
              "Sunguard",
              "In-House",
              "None",
              "Other"
            ].map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {recovery === "Other" && (
            <input
              placeholder="Other"
              onChange={handleOtherRecoveryChange}
              className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
              required
            />
          )}
        </div>
        {recoveryError && <p className="text-red-500">{recoveryError}</p>}
        <div className="primary-btn text-center">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepTwentyOne;
