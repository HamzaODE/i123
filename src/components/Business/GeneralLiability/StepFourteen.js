import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";


const StepFourteen = ({ routeHandler }) => {

  const [generalLiability, setGeneralLiability] = useLocalSave("generalLiability", "");

  const submitHandler = (e) => {
    e.preventDefault();
    if (generalLiability === 'Yes') {
      routeHandler("/GeneralLiability?question=15");
  } else if (generalLiability === 'No') {
      routeHandler("/GeneralLiability?question=16");
  }
  };
  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">Does currently have general liability coverage?</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col  gap-4 lg:gap-14 my-10">
        <select
            value={generalLiability}
            onChange={(e) => setGeneralLiability(e.target.value)}
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

export default StepFourteen;
