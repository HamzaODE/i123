import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";



const StepFifteen = ({ routeHandler }) => {
  const [gl, setGL] = useLocalSave("GLCarrier", "");
  const [Premium, setPremium] = useLocalSave("GLPremium", "");
  const [exp, setExp] = useLocalSave("GLExpiration", "");


  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/Umbrella?question=16");
  };
  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">Please provide the details of your current General Liability Policy</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10">
          <input
            placeholder="Current GL Carrier"
            value={gl}
            onChange={(e) => setGL(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />
          <input
            placeholder="Total Premium"
            value={Premium}
            onChange={(e) => setPremium(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />
        </div>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10">
          <input
            placeholder="Expiration Date"
            value={exp}
            onChange={(e) => setExp(e.target.value)}
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
