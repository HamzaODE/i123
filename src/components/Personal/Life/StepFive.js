import React from "react";



const StepFive = ({ routeHandler }) => {

  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/personal/life?question=6");
  };
  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">Are you a male or female?</p>
      <div className="flex flex-row  gap-4 lg:gap-14 my-10">
        <div className="primary-btn col text-center">
          <button type="submit" onClick={submitHandler}>Male</button>
        </div>
        <div className="primary-btn col ">
          <button type="submit" onClick={submitHandler}>Female</button>
        </div>
      </div>

    </div>
  );
};

export default StepFive;