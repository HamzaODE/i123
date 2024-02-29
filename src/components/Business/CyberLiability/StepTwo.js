import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";


const StepTwo = ({ routeHandler }) => {
  const [tEmployee, setEmployee] = useLocalSave("totalEmployees ", "");
  const [zip, setZip] = useLocalSave("zip ", "");


  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/CyberLiability?question=3");
  };
  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p>How many employees do you have today?</p>
      <form onSubmit={submitHandler}>
        <div className="text-center flex flex-col  gap-4 lg:gap-30 my-10">
          <input
            placeholder='Total Employees'
            value={tEmployee}
            onChange={(e) => setEmployee(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />
          <input
            placeholder='Zipcode'
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />
        </div>
        <div className="primary-btn text-center">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepTwo;
