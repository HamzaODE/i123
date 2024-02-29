import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";



const StepEight = ({ routeHandler }) => {
  const [sAddress, setSAddress] = useLocalSave("streetAddress", "");
  const [sUnit, setSUnit] = useLocalSave("unit#", "");


  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/Umbrella?question=9");
  };
  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p>What is the address in ?</p>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-14 my-10">
          <input
            placeholder="Street Address"
            value={sAddress}
            onChange={(e) => setSAddress(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />
          <input
            placeholder="Suite/Unit#"
            value={sUnit}
            onChange={(e) => setSUnit(e.target.value)}
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

export default StepEight;
