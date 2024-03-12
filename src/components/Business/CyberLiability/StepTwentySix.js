import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepTwentySix = ({ routeHandler }) => {
  const [monitorNetwork, setMonitorNetwork] = useLocalSave("monitorNetwork", "");

  const submitHandler = (e, value) => {
    e.preventDefault();
    setMonitorNetwork(value);
    routeHandler("/CyberLiability?question=27");
  };

  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">Do you monitor your network in real time to detect possible intrusions <br/> or abnormalities in the performance of the system?</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10 primary-btn text-center">
          <button type="submit" onClick={(e) => submitHandler(e, "Yes")} >Yes</button>
          <button type="submit" onClick={(e) => submitHandler(e, "No")} >No</button>
        </div>
      </form>
    </div>
  );
};

export default StepTwentySix;
