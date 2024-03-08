import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";



const StepTen = ({ routeHandler }) => {
  const [fTUS, setFTUS] = useLocalSave("fullTimeInUS", "");
  const [pTUS, setPTUS] = useLocalSave("partTimeInUS", "");
  const [cname, setCName] = useLocalSave("companyName", "");
  const [fTOUS, setFTOUS] = useLocalSave("fullTimeOutUS", "");
  const [pTOUS, setpTOUS] = useLocalSave("partTimeOutUS", "");


  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/WorkersComp?question=11");
  };
  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>How many employees work at {cname}?</p>
      <form onSubmit={submitHandler}>
      <div className="flex justify-center lg:flex-row gap-1 lg:gap-20 my-4">
        <p>Full Time</p>
        <p>Part Time</p>
      </div>
        <div className="flex justify-center lg:flex-row gap-4 lg:gap-14 my-0">
          <input
            type="number"
            placeholder="Within the US"
            value={fTUS}
            onChange={(e) => setFTUS(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-2 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />
          <input
            type="number"
            placeholder="Within the US"
            value={pTUS}
            onChange={(e) => setPTUS(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-2 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />

        </div>
        <div className="flex justify-center lg:flex-row gap-4 lg:gap-14 my-10">
          <input
            type="number"
            placeholder="Within the US"
            value={fTOUS}
            onChange={(e) => setFTOUS(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-2 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />
          <input
            type="number"
            placeholder="Outside the US"
            value={pTOUS}
            onChange={(e) => setpTOUS(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-2 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
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

export default StepTen;
