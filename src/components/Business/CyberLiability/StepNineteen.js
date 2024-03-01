import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";



const StepNineteen = ({ routeHandler }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/CyberLiability?question=20");
  };
  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">Do you outsource (or plan to outsource) a critical part of your internal network/<br/> computer system or internet access/presence to others? If yes, check all<br/>
that apply and name the service provider for each category.</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10 primary-btn text-center">
          <button type="submit" onClick={submitHandler} >Yes</button>
          <button type="submit" onClick={submitHandler} >No</button>
          
        </div>
      </form>
    </div>
  );
};

export default StepNineteen;
