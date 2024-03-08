import React from "react";



const StepNine = ({ routeHandler }) => {

  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/personal/medical?question=10");
  };
  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">Are you a US citizen ?</p>
      <div className="flex flex-row  gap-4 lg:gap-14 my-10">
        <div className="primary-btn col text-center">
          <button type="submit" onClick={submitHandler}>Married</button>
        </div>
        <div className="primary-btn col ">
          <button type="submit" onClick={submitHandler}>Single</button>
        </div>
      </div>

    </div>
  );
};

export default StepNine;