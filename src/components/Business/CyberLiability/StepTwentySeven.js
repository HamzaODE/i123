import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepTwentySeven = ({ routeHandler }) => {
  const [transmitPersonalInfo, setTransmitPersonalInfo] = useLocalSave("transmitPersonalInfo", "");

  const submitHandler = (e, value) => {
    e.preventDefault();
    setTransmitPersonalInfo(value);
    routeHandler("/CyberLiability?question=28");
  };

  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">Do you require the transmission of personal customer information<br/> such as credit card numbers, contact information, etc., as part of <br/> your internet-based web services?</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10 primary-btn text-center">
          <button type="submit" onClick={(e) => submitHandler(e, "Yes")} >Yes</button>
          <button type="submit" onClick={(e) => submitHandler(e, "No")} >No</button>
        </div>
      </form>
    </div>
  );
};

export default StepTwentySeven;
