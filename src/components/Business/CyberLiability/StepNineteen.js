import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";



const StepNineteen = ({ routeHandler }) => {

  const [outsource, setOutsource] = useLocalSave("outsourcePlan", "");

  const submitHandler = (e) => {
    e.preventDefault();
    if (outsource === 'Yes') {
      routeHandler("/CyberLiability?question=20");
    } else if (outsource === 'No') {
      routeHandler("/CyberLiability?question=24");
    }
  };
  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">Do you outsource (or plan to outsource) a critical part of your internal network/<br /> computer system or internet access/presence to others? If yes, check all<br />
        that apply and name the service provider for each category.</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-content-center  gap-4 lg:gap-14 my-10">
          <select
            value={outsource}
            onChange={(e) => setOutsource(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          >
            <option value="">--Select--</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="primary-btn text-center">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepNineteen;
