import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";



const StepTen = ({ routeHandler }) => {
  const [fTUS, setFTUS] = useLocalSave("fullTimeInUS", "");
  const [pTUS, setPTUS] = useLocalSave("partTimeInUS", "");
  const [fTOUS, setFTOUS] = useLocalSave("fullTimeOutUS", "");
  const [pTOUS, setpTOUS] = useLocalSave("partTimeOutUS", "");


  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/Umbrella?question=11");
  };
  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>How many employees work at ?</p>
      <form onSubmit={submitHandler}>
        <div className="flex lg:flex-row gap-4 lg:gap-14 my-10">
          <input
            placeholder="no of Full Time Within the US"
            value={fTUS}
            onChange={(e) => setFTUS(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-4 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />
          <input
            placeholder="no of Part Time Within the US"
            value={pTUS}
            onChange={(e) => setPTUS(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-4 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />
          
        </div>
        <div className="flex lg:flex-row gap-4 lg:gap-14 my-10">
        <input
            placeholder="no of Full Time Outside the US"
            value={fTOUS}
            onChange={(e) => setFTOUS(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-4 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />
          <input
            placeholder="no of Full Time Outside the US"
            value={pTOUS}
            onChange={(e) => setpTOUS(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-4 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
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
