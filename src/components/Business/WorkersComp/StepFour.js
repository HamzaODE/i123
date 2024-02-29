import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";


const StepFour = ({ routeHandler }) => {
  const [aPayrole, setAPayrole] = useLocalSave("annualPayrole", "");


  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/WorkersComp?question=5");
  };
  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p>What is your estimated annual payroll?</p>
      <form onSubmit={submitHandler}>
        <div className="text-center flex flex-col  gap-4 lg:gap-30 my-10">
          <input
            placeholder='0-1M'
            value={aPayrole}
            onChange={(e) => setAPayrole(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
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

export default StepFour;
