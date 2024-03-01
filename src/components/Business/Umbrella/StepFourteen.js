import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";



const StepThirteen = ({ routeHandler }) => {
  const [policyLimit, setPolicyLimit] = useLocalSave("policyLimit", "");


  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/Umbrella?question=15");
  };
  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">How much umbrella insurance limits required?</p>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col  gap-4 lg:gap-14 my-10">
        <select className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[16px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" name="policy_limit" value={policyLimit} onChange={(e) => setPolicyLimit(e.target.value)} required>
            <option value="">Select Policy Limit</option>
            <option value="$1,000,000">$1,000,000</option>
            <option value="$2,000,000">$2,000,000</option>
            <option value="$3,000,000">$3,000,000</option>
            <option value="$4,000,000">$4,000,000</option>
            <option value="$5,000,000">$5,000,000</option>
            <option value="$6,000,000">$6,000,000</option>
            <option value="$7,000,000">$7,000,000</option>
            <option value="$8,000,000">$8,000,000</option>
            <option value="$9,000,000">$9,000,000</option>
            <option value="$10,000,000">$10,000,000</option>
        </select>
        </div>
        <div className="primary-btn text-center">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepThirteen;
