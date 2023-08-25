import React from "react";
const StepOne = ({ routeHandler }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/more?question=2");
  };
  return (
    <div className="text-black text-center">
      <p className="font-light text-[40px] text-[#646498]">
        Great Hamza! Let’s get more specific
      </p>
      <p className="font-light text-[30px]">
        Tell us more about your business. What’s it called?
      </p>
      <form onSubmit={submitHandler}>
        <input
          placeholder="Enter business name"
          className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] w-[400px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
          required
        />
        <p className="font-light text-[30px] mt-8">
          And at what address is it located?
        </p>
        <input
          placeholder="Enter address"
          className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] w-[400px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
          required
        />
        <p className="font-light text-[30px] mt-8 text-center">
          Can we also have your mailing address?
          <br />
          <span className="font-light text-[18px]">
            (If it’s different from your location)
          </span>
        </p>
        <input
          placeholder="Enter mailing address"
          className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] w-[400px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
          required
        />
        <div className="my-7">
          <button
            type="submit"
            className="text-[18px] border-[#AEADC8] px-8 rounded-2xl py-[2px] border-[1px] text-[#646498]"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default StepOne;
