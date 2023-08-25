import React from "react";

const StepThree = ({ routeHandler }) => {
  return (
    <>
      <div>Stripe Section</div>
      <button
        onClick={() => routeHandler("/more?question=4")}
        className="text-[18px] border-[#AEADC8] px-8 rounded-2xl py-[2px] border-[1px] text-[#646498]"
      >
        Next
      </button>
    </>
  );
};

export default StepThree;
