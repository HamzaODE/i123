import React from "react";



const StepTwentySeven = ({ routeHandler }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/CyberLiability?question=28");
  };
  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">Do you require the transmission of personal customer information such as credit<br/> card numbers, contact information, etc., as part of your internet-based web<br/> services?</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10 primary-btn text-center">
          <button type="submit" onClick={submitHandler} >Yes</button>
          <button type="submit" onClick={submitHandler} >No</button>
          
        </div>
      </form>
    </div>
  );
};

export default StepTwentySeven;
