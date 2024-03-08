import React from "react";



const StepTwentySix = ({ routeHandler }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/CyberLiability?question=27");
  };
  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">Do you monitor your network in real time to detect possible intrusions or<br/>2 abnormalities in the performance of the system?</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10 primary-btn text-center">
          <button type="submit" onClick={submitHandler} >Yes</button>
          <button type="submit" onClick={submitHandler} >No</button>
          
        </div>
      </form>
    </div>
  );
};

export default StepTwentySix;
