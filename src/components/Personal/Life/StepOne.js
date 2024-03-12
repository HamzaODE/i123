import React, { useState } from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepOne = ({ routeHandler }) => {
  const [fname, setFName] = useLocalSave("firstName", "");
  const [lname, setLName] = useLocalSave("lastName", "");
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!fname || !lname) {
      setError("Please fill out both first name and last name.");
      return;
    }
    setError("");
    routeHandler("/personal/life?question=2");
  };

  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>Hi! I’m Zain. Nice to meet you.</p>
      <p>What’s your name?</p>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-14 my-10">
          <input
            placeholder="Firstname"
            value={fname}
            onChange={(e) => setFName(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />
          <input
            placeholder="Lastname"
            value={lname}
            onChange={(e) => setLName(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div className="primary-btn">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepOne;
