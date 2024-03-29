import React, { useState } from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepSix = ({ routeHandler }) => {
  const [fname, setFName] = useLocalSave("firstName", "");
  const [lname, setLName] = useLocalSave("lastName", "");
  const [cname, setCName] = useLocalSave("companyName", "");
  const [errors, setErrors] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    routeHandler("/Umbrella?question=7");
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};
    if (fname.trim() === "") {
      newErrors.fname = "First name is required";
      isValid = false;
    }
    if (lname.trim() === "") {
      newErrors.lname = "Last name is required";
      isValid = false;
    }
    if (cname.trim() === "") {
      newErrors.cname = "Company name is required";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">Hi, it's nice to meet you. What's your <br /> name and the name of your company?</p>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-14 my-10">
          <input
            placeholder="Firstname"
            value={fname}
            onChange={(e) => setFName(e.target.value)}
            className={`border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ${errors.fname ? 'border-red-500' : ''}`}
            required
          />
          <input
            placeholder="Lastname"
            value={lname}
            onChange={(e) => setLName(e.target.value)}
            className={`border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ${errors.lname ? 'border-red-500' : ''}`}
            required
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-14 my-10">
          {errors.fname && <p className="text-red-500">{errors.fname}</p>}
          {errors.lname && <p className="text-red-500">{errors.lname}</p>}
        </div>
        <div className="flex flex-col  gap-4 lg:gap-14 my-10">
          <input
            placeholder="Company Name"
            value={cname}
            onChange={(e) => setCName(e.target.value)}
            className={`border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ${errors.cname ? 'border-red-500' : ''}`}
            required
          />
          {errors.cname && <p className="text-red-500">{errors.cname}</p>}
        </div>
        <div className="primary-btn text-center">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepSix;
