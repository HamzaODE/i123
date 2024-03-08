import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";


const StepFifteen = ({ routeHandler }) => {

  const [EPLI, setEPLI] = useLocalSave("EPLIinsurance", "");

  const submitHandler = (e) => {
    e.preventDefault();
    if (EPLI === 'Yes') {
      routeHandler("/Epli?question=16");
    } else if (EPLI === 'No') {
      routeHandler("/Epli?question=17");
    }
  };
  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">Does currently have EPLI insurance?</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-content-center  gap-4 lg:gap-14 my-10">
          <select
            value={EPLI}
            onChange={(e) => setEPLI(e.target.value)}
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

export default StepFifteen;
