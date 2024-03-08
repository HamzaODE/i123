import React, { useState } from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepTwentyTwo = ({ routeHandler }) => {
  const [services, setServices] = useLocalSave("financialServices", "");
  const [servicesError, setServicesError] = useState("");

  const handleServicesChange = (e) => {
    setServices(e.target.value);
    setServicesError("");
  };

  const validate = () => {
    if (!services) {
      setServicesError("Please select or enter your Financial Services and Payment Processing.");
      return false;
    }
    return true;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validate()) {
      routeHandler("/CyberLiability?question=23");
    }
  };

  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">What is your Financial Services and Payment Processing</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center gap-4 lg:gap-14 my-10">
          <select
            value={services}
            onChange={handleServicesChange}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          >
            <option value="">Select your Financial Services and Payment Processing</option>
            {[
              "Corillion",
              "Datavantage",
              "Digital Insight",
              "DSS",
              "ECHO",
              "First Data",
              "FI Serve",
              "Global Payments",
              "Jack Henry",
              "Lawson",
              "Metavente",
              "Paymentech",
              "Paypal",
              "S-1",
              "Verisign",
              "In House",
              "Other"
            ].map((service) => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
          {services === "Other" && (
            <input
              placeholder="Other"
              onChange={handleServicesChange}
              className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
              required
            />
          )}
        </div>
        {servicesError && <p className="text-red-500">{servicesError}</p>}
        <div className="primary-btn text-center">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepTwentyTwo;
