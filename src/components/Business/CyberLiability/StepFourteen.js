import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepFourteen = ({ routeHandler }) => {
  const [computerDamageResponsibility, setComputerDamageResponsibility] = useLocalSave("computerDamageResponsibility", "");

  const submitHandler = (e, selection) => {
    e.preventDefault();
    setComputerDamageResponsibility(selection);
    routeHandler("/CyberLiability?question=15");
  };

  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">During the last 3 years, has anyone alleged that you were responsible for damage <br/> to their computer systems arising out of the operation of Applicant’s computer<br/> systems?</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10 primary-btn text-center">
          <button type="submit" onClick={(e) => submitHandler(e, "Yes")}>Yes</button>
          <button type="submit" onClick={(e) => submitHandler(e, "No")}>No</button>
        </div>
      </form>
    </div>
  );
};

export default StepFourteen;
