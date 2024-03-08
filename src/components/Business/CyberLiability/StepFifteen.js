import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";



const StepFifteen = ({ routeHandler }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/CyberLiability?question=16");
  };
  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">During the last 3 years, have you received a complaint or other proceeding <br/> (including an injunction or other request for non-monetary relief) arising out of<br/> intellectual property infringement, copyright infringement, media content, or<br/> advertising material?</p>
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
