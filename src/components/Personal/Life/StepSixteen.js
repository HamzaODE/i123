import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";


const StepSixteen = ({ routeHandler }) => {

  const [skydivingFFJAffliatedClub, setSkydivingFFJAffliatedClub] = useLocalSave("skydivingFFJAffliatedClub", "");

  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/personal/life?question=13");
  };
  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">SKYDIVING</p>
      <p className="text-center">Are you an amateur, professional or instructor?</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col  gap-4 lg:gap-14 my-10">
          <select
            value={skydivingFFJAffliatedClub}
            onChange={(e) => setSkydivingFFJAffliatedClub(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          >
            <option value="">Select Professional</option>
            <option value="Amateur">Amateur</option>
            <option value="Professional">Professional</option>
            <option value="Instructor">Instructor</option>

          </select>
        </div>
        <div className="primary-btn text-center">
          <button type="submit">Next</button>
        </div>
      </form>

    </div>
  );
};

export default StepSixteen;
