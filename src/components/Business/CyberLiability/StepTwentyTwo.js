import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";



const StepTwentyTwo = ({ routeHandler }) => {
  const [Services, setServices ] = useLocalSave("financialServices", "");


  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/CyberLiability?question=23");
  };
  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">What is your Financial Services and Payment Processing</p>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col  gap-4 lg:gap-14 my-10">
          <input
            placeholder="Corillion, ECHO, etc"
            value={Services}
            onChange={(e) => setServices(e.target.value)}
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

export default StepTwentyTwo;
