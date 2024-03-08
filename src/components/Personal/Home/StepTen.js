import React from "react";



const StepTen = ({ routeHandler }) => {

  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/personal/home?question=11");
  };
  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">Ok, do you have a swimming pool?</p>
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

export default StepTen;