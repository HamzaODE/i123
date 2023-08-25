import React from "react";
import stockIcon from "../../assets/images/stock.png";

const StepFour = ({ routeHandler }) => {
  const submitHandler = () => {
    routeHandler("/get-quote?question=5");
  };
  return (
    <div className="text-black">
      {" "}
      <div className="text-center text-[30px] font-light flex gap-2">
        <p>What is your estimated Annual Revenue?</p>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <button
          onClick={submitHandler}
          className="flex flex-col justify-center items-center border-[1px] border-[#646498] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
        >
          <img src={stockIcon} alt="computer-icon" className="mt-4 w-70" />
          <p className="text-[15px] font-light text-center mt-2">0 - 500K</p>
        </button>
        <button
          onClick={submitHandler}
          className="flex flex-col justify-center items-center border-[1px] border-[#646498] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
        >
          <img src={stockIcon} alt="computer-icon" className="mt-4 w-70" />
          <p className="text-[15px] font-light text-center mt-2">1M - 3M</p>
        </button>
        <button
          onClick={submitHandler}
          className="flex flex-col justify-center items-center border-[1px] border-[#646498] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
        >
          <img src={stockIcon} alt="computer-icon" className="mt-4 w-70" />
          <p className="text-[15px] font-light text-center mt-2">3M - 5M</p>
        </button>
        <button
          onClick={submitHandler}
          className="flex flex-col justify-center items-center border-[1px] border-[#646498] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
        >
          <img src={stockIcon} alt="computer-icon" className="mt-4 w-70" />
          <p className="text-[15px] font-light text-center mt-2">500K - 1M</p>
        </button>
        <button
          onClick={submitHandler}
          className="flex flex-col justify-center items-center border-[1px] border-[#646498] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
        >
          <img src={stockIcon} alt="computer-icon" className="mt-4 w-70" />
          <p className="text-[15px] font-light text-center mt-2">5M+</p>
        </button>
      </div>
    </div>
  );
};

export default StepFour;
