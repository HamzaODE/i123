import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";


const StepThirteen = ({ routeHandler }) => {
  const [dfname, setDFName] = useLocalSave("doctorFirstName", "");
  const [dlname, setDLName] = useLocalSave("doctorLastName", "");


  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/personal/medical?question=14");
  };
  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>What is the name of your current doctor?</p>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-14 my-10">
          <input
            placeholder="Firstname"
            value={dfname}
            onChange={(e) => setDFName(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />
          <input
            placeholder="Lastname"
            value={dlname}
            onChange={(e) => setDLName(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />
        </div>
        <div className="primary-btn">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepThirteen;
