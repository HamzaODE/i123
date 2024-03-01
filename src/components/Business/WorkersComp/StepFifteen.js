import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";



const StepFifteen = ({ routeHandler }) => {
  const [oName, setOName] = useLocalSave("ownerName", "");
  const [percentage, setPercentage] = useLocalSave("ownership%", "");


  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/WorkersComp?question=16");
  };
  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">Lastly, What is the names of owners and % of ownership?</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10">
          <input
            placeholder="Name Of Owner"
            value={oName}
            onChange={(e) => setOName(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />
          <input
            placeholder="% of Ownership"
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
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

export default StepFifteen;
