import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";


const StepSix = ({ routeHandler }) => {
  const [vin, setVin] = useLocalSave("VIN", "");
  const [vYear, setVYear] = useLocalSave("vYear", "");
  const [vMake, setVMake] = useLocalSave("vMake", "");
  const [vModel, setVModel] = useLocalSave("vModel", "");
  const [vTrim, setVTrim] = useLocalSave("vTrim", "");


  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/personal/auto?question=7");
  };
  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>Great! Let's talk about your cars.</p>
      <b>Vehicle 1 info</b>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10">
          <input
            placeholder="Check VIN"
            value={vin}
            onChange={(e) => setVin(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-14 my-10">
        <input
            placeholder="Year"
            value={vYear}
            onChange={(e) => setVYear(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />
        <input
            placeholder="Make"
            value={vMake}
            onChange={(e) => setVMake(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-14 my-10">
        <input
            placeholder="Model"
            value={vModel}
            onChange={(e) => setVModel(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />
        <input
            placeholder="Trim"
            value={vTrim}
            onChange={(e) => setVTrim(e.target.value)}
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
