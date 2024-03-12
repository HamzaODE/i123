import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";



const StepSeventeen = ({ routeHandler }) => {
  const [hasPrivacyPolicy, setHasPrivacyPolicy] = useLocalSave("hasPrivacyPolicy", "");

  const submitHandler = (e, value) => {
    e.preventDefault();
    setHasPrivacyPolicy(value);
    routeHandler("/CyberLiability?question=18");
  };

  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">Do you have a formal privacy policy that has been approved by legal counsel?</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10 primary-btn text-center">
          <button type="submit" onClick={(e) => submitHandler(e, "Yes")} >Yes</button>
          <button type="submit" onClick={(e) => submitHandler(e, "No")} >No</button>
        </div>
      </form>
    </div>
  );
};

export default StepSeventeen;
