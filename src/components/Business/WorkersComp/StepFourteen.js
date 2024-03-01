import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";



const StepFourteen = ({ routeHandler }) => {
  const [tax, setTax] = useLocalSave("federalTaxID", "");


  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/WorkersComp?question=15");
  };
  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">What is 's Federal Tax ID number?</p>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col  gap-4 lg:gap-14 my-10">
          <input
            placeholder="Federal Tax ID"
            value={tax}
            onChange={(e) => setTax(e.target.value)}
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

export default StepFourteen;
