import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";



const StepEighteen = ({ routeHandler }) => {
  const [hasBusinessContinuityPlan, setHasBusinessContinuityPlan] = useLocalSave("hasBusinessContinuityPlan", "");

  const submitHandler = (e, value) => {
    e.preventDefault();
    setHasBusinessContinuityPlan(value);
    routeHandler("/CyberLiability?question=19");
  };

  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">Do you have a written business continuity/disaster recovery plan that includes procedures to be followed in the event of a disruptive computer incident?</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10 primary-btn text-center">
          <button type="submit" onClick={(e) => submitHandler(e, "Yes")} >Yes</button>
          <button type="submit" onClick={(e) => submitHandler(e, "No")} >No</button>
        </div>
      </form>
    </div>
  );
};

export default StepEighteen;
