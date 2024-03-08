import React from "react";



const StepFourteen = ({ routeHandler }) => {

  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/personal/medical?question=15");
  };
  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center"> <b>We are almost done.</b> <b/>Would you like to see if you qualify for a low <br/>income subsidy through the exchange?</p>
      <div className="flex flex-row  gap-4 lg:gap-14 my-10">
        <div className="primary-btn col text-center">
          <button type="submit" onClick={submitHandler}>Yes</button>
        </div>
        <div className="primary-btn col ">
          <button type="submit" onClick={submitHandler}>No</button>
        </div>
      </div>

    </div>
  );
};

export default StepFourteen;