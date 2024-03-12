import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepTwentyFive = ({ routeHandler }) => {
  const [performAuditChecks, setPerformAuditChecks] = useLocalSave("performAuditChecks", "");

  const submitHandler = (e, value) => {
    e.preventDefault();
    setPerformAuditChecks(value);
    routeHandler("/CyberLiability?question=26");
  };

  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">Do you perform audit checks on your vendors and service providers who handle<br/> your privacy sensitive data and require them to have adequate security<br/> protocols?</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10 primary-btn text-center">
          <button type="submit" onClick={(e) => submitHandler(e, "Yes")} >Yes</button>
          <button type="submit" onClick={(e) => submitHandler(e, "No")} >No</button>
        </div>
      </form>
    </div>
  );
};

export default StepTwentyFive;
