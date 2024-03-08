import React from "react";



const StepTwentyFour = ({ routeHandler }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/CyberLiability?question=25");
  };
  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">Do you have a program in place to periodically test your data security controls?</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10 primary-btn text-center">
          <button type="submit" onClick={submitHandler} >Yes</button>
          <button type="submit" onClick={submitHandler} >No</button>
          
        </div>
      </form>
    </div>
  );
};

export default StepTwentyFour;
