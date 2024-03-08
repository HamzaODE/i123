import React, { useState } from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepTwentyThree = ({ routeHandler }) => {
  const [cloud, setCloud] = useLocalSave("cloud", "");
  const [cloudError, setCloudError] = useState("");

  const handleCloudChange = (e) => {
    setCloud(e.target.value);
    setCloudError("");
  };

  const validate = () => {
    if (!cloud) {
      setCloudError("Please select or enter your Cloud provider.");
      return false;
    }
    return true;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validate()) {
      routeHandler("/CyberLiability?question=24");
    }
  };

  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">What is your Other: "cloud", ASP, SAAS, Etc.</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center gap-4 lg:gap-14 my-10">
          <select
            value={cloud}
            onChange={handleCloudChange}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          >
            <option value="">Select your Cloud provider</option>
            {[
              "Amazon",
              "Microsoft",
              "Google",
              "Go Daddy",
              "IBM",
              "HP",
              "AT&T",
              "Rackspace",
              "Saavis",
              "Terremark",
              "Fujitsu",
              "Nirvanix",
              "VMWare /EMC",
              "Salesforce",
              "Other"
            ].map((provider) => (
              <option key={provider} value={provider}>{provider}</option>
            ))}
          </select>
          {cloud === "Other" && (
            <input
              placeholder="Other"
              onChange={handleCloudChange}
              className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
              required
            />
          )}
        </div>
        {cloudError && <p className="text-red-500">{cloudError}</p>}
        <div className="primary-btn text-center">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepTwentyThree;
