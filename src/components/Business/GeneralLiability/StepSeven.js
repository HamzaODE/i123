import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";


const StepFour = ({ routeHandler }) => {
  const [fname, setFName] = useLocalSave("firstName", "");
  const [aPayrole, setAPayrole] = useLocalSave("annualPayrole", "");
  const [cname, setCName] = useLocalSave("companyName", "");
  const [cZip, setCZip] = useLocalSave("companyZip", "");



  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/GeneralLiability?question=8");
  };
  return (
    <div className="text-Center text-[30px] font-light text-black">
      <p>Thanks {fname}. What is {cname}'s ZIP Code?</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center lg:flex-row gap-4 lg:gap-30 my-10">
          <input
            placeholder='zipcode'
            value={cZip}
            onChange={(e) => setCZip(e.target.value)}
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
