import React from "react";
import moneyIcon from "../../assets/images/money.png";
import shieldIcon from "../../assets/images/shield.png";
const StepFive = ({ routeHandler }) => {
  const submitHandler = () => {
    routeHandler("/get-quote?question=6");
  };
  return (
    <div className="text-black">
      {" "}
      <div className="text-center text-[30px] font-light flex gap-2 my-4">
        <p>How much Liability Limit do you require?</p>
        <img src={shieldIcon} alt="shield-icon" className="h-100 mt-2" />
      </div>
      <div className="flex justify-center gap-8 my-4">
        <button
          onClick={submitHandler}
          className="px-4 flex flex-col justify-center items-center border-[1px] border-[#646498] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
        >
          <img src={moneyIcon} alt="computer-icon" className="mt-4 w-70" />
          <p className="text-[15px] font-light text-center mt-2">$1MM/$2MM</p>
        </button>
        <button
          onClick={submitHandler}
          className="px-4 flex flex-col justify-center items-center border-[1px] border-[#646498] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
        >
          <img src={moneyIcon} alt="computer-icon" className="mt-4 w-70" />
          <p className="text-[15px] font-light text-center mt-2">$2MM/$4MM</p>
        </button>
      </div>
    </div>
  );
};

export default StepFive;
