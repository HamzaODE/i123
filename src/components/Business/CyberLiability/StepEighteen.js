import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";



const StepEighteen = ({ routeHandler }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/CyberLiability?question=19");
  };
  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">Do you have a written business continuity/disaster recovery plan that includes <br/> procedures to be followed in the event of a disruptive computer incident?</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10 primary-btn text-center">
          <button type="submit" onClick={submitHandler} >Yes</button>
          <button type="submit" onClick={submitHandler} >No</button>
          
        </div>
      </form>
    </div>
  );
};

export default StepEighteen;
