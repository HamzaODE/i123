import React, { useState } from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepTwenty = ({ routeHandler }) => {
  const [internetServiceProvider, setInternetServiceProvider] = useLocalSave("internetServiceProvider", "");
  const [internetProviderError, setInternetProviderError] = useState("");

  const handleProviderChange = (e) => {
    setInternetServiceProvider(e.target.value);
    setInternetProviderError("");
  };

  const handleOtherProviderChange = (e) => {
    setInternetServiceProvider(e.target.value);
    setInternetProviderError("");
  };

  const validate = () => {
    if (!internetServiceProvider) {
      setInternetProviderError("Please select or enter your Internet Service Provider.");
      return false;
    }
    return true;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validate()) {
      routeHandler("/CyberLiability?question=21");
    }
  };

  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">What is your Internet Service Provider</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center gap-4 lg:gap-14 my-10">
          <select
            value={internetServiceProvider}
            onChange={handleProviderChange}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          >
            <option value="">Select your Internet Service Provider</option>
            {[
              "Bellsouth",
              "Cablevision",
              "Charter",
              "Comcast",
              "Cox",
              "Earthlink",
              "Insight BB",
              "Mediacom",
              "Qwest",
              "Road Runner",
              "SBC(AT&T, Yahoo, Sprint)",
              "United Online",
              "Verizon",
              "Other"
            ].map((provider) => (
              <option key={provider} value={provider}>{provider}</option>
            ))}
          </select>
          {internetServiceProvider === "Other" && (
            <input
              placeholder="Other"
              onChange={handleOtherProviderChange}
              className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
              required
            />
          )}
        </div>
        {internetProviderError && <p className="text-red-500">{internetProviderError}</p>}
        <div className="primary-btn text-center">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepTwenty;
