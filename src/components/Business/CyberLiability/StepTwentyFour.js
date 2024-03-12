import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepTwentyFour = ({ routeHandler }) => {
  const [hasDataSecurityTestingProgram, setHasDataSecurityTestingProgram] = useLocalSave("hasDataSecurityTestingProgram", "");

  const submitHandler = (e, value) => {
    e.preventDefault();
    setHasDataSecurityTestingProgram(value);
    routeHandler("/CyberLiability?question=25");
  };

  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">Do you have a program in place to periodically test your data security controls?</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10 primary-btn text-center">
          <button type="submit" onClick={(e) => submitHandler(e, "Yes")} >Yes</button>
          <button type="submit" onClick={(e) => submitHandler(e, "No")} >No</button>
        </div>
      </form>
    </div>
  );
};

export default StepTwentyFour;
