import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";


const StepFive = ({ routeHandler }) => {
  const [ownOrRent, setOwnOrRent] = useLocalSave("ownOrRent", "");


  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/personal/home?question=6");
  };
  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>Ok! Do you live in this home or rent it out?</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10">
          <select
            value={ownOrRent}
            onChange={(e) => setOwnOrRent(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          >
            <option value="">Select Occupancy</option>
            <option value="Owner- Primary">Owner- Primary</option>
            <option value="Owner- Secondary">Owner- Secondary</option>
            <option value="Rented to Others">Rented to Others</option>

          </select>
        </div>
        <div className="primary-btn">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepFive;
