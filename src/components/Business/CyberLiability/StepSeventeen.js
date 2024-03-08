import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";



const StepSeventeen = ({ routeHandler }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/CyberLiability?question=18");
  };
  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">Do you have a formal privacy policy that has been approved by legal counsel?
</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10 primary-btn text-center">
          <button type="submit" onClick={submitHandler} >Yes</button>
          <button type="submit" onClick={submitHandler} >No</button>
          
        </div>
      </form>
    </div>
  );
};

export default StepSeventeen;
