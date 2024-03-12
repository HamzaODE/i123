import React, { useState } from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepEleven = ({ routeHandler }) => {
  const [plans, setPlans] = useLocalSave("typeOfPlan", []);
  const [plansError, setPlansError] = useState("");

  const handlePlanChange = (e) => {
    const selectedPlans = Array.from(e.target.selectedOptions, (option) => option.value);
    setPlans(selectedPlans);
    setPlansError("");
  };

  const validate = () => {
    if (plans.length === 0) {
      setPlansError("Please select at least one type of plan.");
      return false;
    }
    return true;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validate()) {
      routeHandler("/GroupMedical?question=13");
    }
  };

  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>What type of plans would you like in your quote? Click all that apply</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center gap-4 lg:gap-14 my-10">
          <select
            value={plans}
            onChange={handlePlanChange}
            className="border-[#646498] border-[1px] rounded-2xl px-14 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          >
            <option value="HMO">HMO</option>
            <option value="PPO">PPO</option>
            <option value="EPO">EPO</option>
            <option value="HSA">HSA</option>
            <option value="POS">POS</option>
            <option value="HRA">HRA</option>
            <option value="Not Sure">Not Sure</option>
          </select>
        </div>
        {plansError && <p className="text-red-500">{plansError}</p>}
        <div className="primary-btn text-center">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepEleven;
