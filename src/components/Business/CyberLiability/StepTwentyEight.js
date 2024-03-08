import React from "react";



const StepTwentyEight = ({ routeHandler }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/CyberLiability?question=29");
  };
  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">Have your products or services been the subject of copyright, patent or<br/> trademark infringement allegations?</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10 primary-btn text-center">
          <button type="submit" onClick={submitHandler} >Yes</button>
          <button type="submit" onClick={submitHandler} >No</button>
          
        </div>
      </form>
    </div>
  );
};

export default StepTwentyEight;
