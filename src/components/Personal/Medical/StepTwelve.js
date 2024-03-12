import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";


const StepTwelve = ({ routeHandler }) => {
  const [lcDate, setLCDate] = useLocalSave("lossCoverageDate", "");


  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/personal/medical?question=13");
  };
  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>What is your Loss of Coverage Date?</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10">
          <input
            type="date"
            placeholder="Loss of Coverage Date"
            value={lcDate}
            onChange={(e) => setLCDate(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-14 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
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

export default StepTwelve;
