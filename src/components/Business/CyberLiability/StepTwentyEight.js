import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepTwentyEight = ({ routeHandler }) => {
  const [isSubjectOfInfringementAllegations, setIsSubjectOfInfringementAllegations] = useLocalSave("isSubjectOfInfringementAllegations", "");

  const submitHandler = (e, value) => {
    e.preventDefault();
    setIsSubjectOfInfringementAllegations(value);
    routeHandler("/CyberLiability?question=29");
  };

  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">Have your products or services been the subject of copyright,<br/> patent or trademark infringement allegations?</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10 primary-btn text-center">
          <button type="submit" onClick={(e) => submitHandler(e, "Yes")} >Yes</button>
          <button type="submit" onClick={(e) => submitHandler(e, "No")} >No</button>
        </div>
      </form>
    </div>
  );
};

export default StepTwentyEight;
