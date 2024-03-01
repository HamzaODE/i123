import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";



const StepEleven = ({ routeHandler }) => {
  const [plans, setPlans] = useLocalSave("typeOfPlan", "");
 

  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/GroupMedical?question=12");
  };
  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>What type of plans would you like in your quote? Click all that apply</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center gap-4 lg:gap-14 my-10">
          <input
            placeholder="HMO, PPO, POS, etc."
            value={plans}
            onChange={(e) => setPlans(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-14 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />
        </div>
        <div className="primary-btn text-center">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepEleven;
