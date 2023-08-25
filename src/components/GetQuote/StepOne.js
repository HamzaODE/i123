import React from "react";

const StepOne = ({ routeHandler }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/get-quote?question=2");
  };
  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>Hi! I’m Zain. Nice to meet you.</p>
      <p>What’s your name?</p>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-14 my-10">
          <input
            placeholder="Firstname"
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />
          <input
            placeholder="Lastname"
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />
        </div>
        <button
          type="submit"
          className="text-[18px] border-[#AEADC8] px-8 rounded-2xl py-[2px] border-[1px] text-[#646498]"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default StepOne;
