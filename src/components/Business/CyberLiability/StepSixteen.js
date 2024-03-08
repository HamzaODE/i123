import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";



const StepSixteen = ({ routeHandler }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/CyberLiability?question=17");
  };
  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">Do you collect zip codes or other personal information at point of sale?</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10 primary-btn text-center">
          <button type="submit" onClick={submitHandler} >Yes</button>
          <button type="submit" onClick={submitHandler} >No</button>
          
        </div>
      </form>
    </div>
  );
};

export default StepSixteen;
