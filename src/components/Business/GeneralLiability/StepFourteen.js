import React from "react";



const StepFourteen = ({ routeHandler }) => {

  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/GeneralLiability?question=15");
  };
  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">Does currently have general liability coverage?</p>
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
