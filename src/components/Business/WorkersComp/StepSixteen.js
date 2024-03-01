import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";



const StepFifteen = ({ routeHandler }) => {
  const [oName, setOName] = useLocalSave("ownerName", "");
  const [percentage, setPercentage] = useLocalSave("ownership%", "");


  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/WorkersComp?question=17");
  };
  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">Does currently have Worker Comp insurance?</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10 primary-btn text-center">
          <button type="submit" onClick={submitHandler} >Yes</button>
          <button type="submit" onClick={submitHandler} >No</button>
          
        </div>
      </form>
    </div>
  );
};

export default StepFifteen;
