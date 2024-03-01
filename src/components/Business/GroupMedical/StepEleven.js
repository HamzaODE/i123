import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";



const StepEleven = ({ routeHandler }) => {
  const [plans, setPlans] = useLocalSave("plansToOffer", "");
  const [date, setDate] = useLocalSave("planEffectiveDate", "");
 

  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/GroupMedical?question=12");
  };
  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>How many plans do you want to offer?</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center gap-4 lg:gap-14 my-10">
          <input
            placeholder="1, 2, 3 etc"
            value={plans}
            onChange={(e) => setPlans(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-14 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />
        </div>
      <p>Select your desired effective date</p>
        <div className="flex justify-center gap-4 lg:gap-14 my-10">
        <input
            placeholder="Asap, 1 month, 6 months etc"
            value={date}
            onChange={(e) => setDate(e.target.value)}
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
