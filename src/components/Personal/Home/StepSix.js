import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";


const StepSix = ({ routeHandler }) => {
  const [yearBuilt, setYearBuilt] = useLocalSave("yearBuilt", "");


  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/personal/home?question=7");
  };
  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>And what year was this home built?</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10">
          <input
            placeholder="Year"
            value={yearBuilt}
            onChange={(e) => setYearBuilt(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />
        </div>
        <div className="primary-btn">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepSix;
