import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";


const StepSeventeen = ({ routeHandler }) => {

  const [scubaDivingDepth, setScubaDivingDepth] = useLocalSave("scubaDivingDepth", "");

  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/personal/life?question=18");
  };
  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">SCUBA DIVING</p>
      <p className="text-center">What depth do you dive to?</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col  gap-4 lg:gap-14 my-10">
          <select
            value={scubaDivingDepth}
            onChange={(e) => setScubaDivingDepth(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          >
            <option value="">Select Depth</option>
            <option value="DepthLess40Meters">less than 130 feet (40 meters)</option>
            <option value="DepthOver40Meters">more than 130 feet (40 meters)</option>


          </select>
        </div>
        <div className="primary-btn text-center">
          <button type="submit">Next</button>
        </div>
      </form>

    </div>
  );
};

export default StepSeventeen;
