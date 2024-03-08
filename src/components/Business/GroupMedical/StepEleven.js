import React, { useState } from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepEleven = ({ routeHandler }) => {
  const [plans, setPlans] = useLocalSave("plansToOffer", "");
  const [date, setDate] = useLocalSave("planEffectiveDate", "");
  const [plansError, setPlansError] = useState("");
  const [dateError, setDateError] = useState("");

  const handlePlansChange = (e) => {
    setPlans(e.target.value);
    setPlansError("");
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    setDateError("");
  };

  const validate = () => {
    let isValid = true;

    if (!plans || isNaN(plans) || parseInt(plans) < 1 || parseInt(plans) > 4) {
      setPlansError("Please select a valid number of plans (1 to 4).");
      isValid = false;
    }

    if (!date || !["ASAP", "1 month", "2 months", "3+ months"].includes(date)) {
      setDateError("Please select a valid effective date option.");
      isValid = false;
    }

    return isValid;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validate()) {
      routeHandler("/GroupMedical?question=12");
    }
  };

  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>How many plans do you want to offer?</p>
      <div className="flex justify-center gap-4 lg:gap-14 my-10">
        <select
          value={plans}
          onChange={handlePlansChange}
          className="border-[#646498] border-[1px] rounded-2xl px-14 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
          required
        >
          <option value="">Select</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4+">4+</option>
        </select>
      </div>
      {plansError && <p className="text-red-500">{plansError}</p>}
      <p>Select your desired effective date</p>
      <div className="flex justify-center gap-4 lg:gap-14 my-10">
        <select
          value={date}
          onChange={handleDateChange}
          className="border-[#646498] border-[1px] rounded-2xl px-14 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
          required
        >
          <option value="">Select</option>
          <option value="ASAP">ASAP</option>
          <option value="1 month">1 month</option>
          <option value="2 months">2 months</option>
          <option value="3+ months">3+ months</option>
        </select>
      </div>
      {dateError && <p className="text-red-500">{dateError}</p>}
      <div className="primary-btn text-center">
        <button type="submit" onClick={submitHandler}>Next</button>
      </div>
    </div>
  );
};

export default StepEleven;
