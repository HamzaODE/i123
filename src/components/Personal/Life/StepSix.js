import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";


const StepSix = ({ routeHandler }) => {
  const [usedtobacco, setUTobacco] = useLocalSave("usedtobacco", "");


  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/personal/life?question=7");
  };
  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>When was the last time you used tobacco or a nicotine product?</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10">
        <select
            value={usedtobacco}
            onChange={(e) => setUTobacco(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          >
            <option>Select Used Tobacco</option>
            <option value="NeverUsed">never used</option>
            <option value="Last12Months">within the last 12 months</option>
            <option value="Last12To23Months">12-23 months</option>
            <option value="Last24To35Months">24-35 months</option>
            <option value="MoreThan36Months">36 months or greater</option>

          </select>
        </div>
        <div className="primary-btn">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepSix;
