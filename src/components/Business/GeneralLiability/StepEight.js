import React, { useState } from "react";
import * as yup from 'yup';
import useLocalSave from "../../../hooks/useLocalSave";

const StepEight = ({ routeHandler }) => {
  const [sAddress, setSAddress] = useLocalSave("streetAddress", "");
  const [sUnit, setSUnit] = useLocalSave("unit#", "");
  const [cname, setCName] = useLocalSave("companyName", "");
  const [errors, setErrors] = useState({});

  
  const schema = yup.object().shape({
    sAddress: yup.string().required('Street address is required'),
    sUnit: yup.string().required('Unit number is required'),
  });
  
  const submitHandler = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    routeHandler("/GeneralLiability?question=9");
  };

  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p>Can I have the Address of {cname}?</p>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-14 my-10">
          <input
            placeholder="Street Address"
            value={sAddress}
            onChange={(e) => setSAddress(e.target.value)}
            pattern=".{6,255}"
            title="Please enter a valid address"
            className={`border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ${errors.sAddress ? 'border-red-500' : ''}`}
            required
          />
          <input
            placeholder="Suite/Unit#"
            value={sUnit}
            onChange={(e) => setSUnit(e.target.value)}
            pattern=".{0,255}"
            title="Please enter a valid unit number"
            className={`border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ${errors.sUnit ? 'border-red-500' : ''}`}
            required
          />
        </div>
        {errors.sAddress && <p className="text-red-500">{errors.sAddress}</p>}
        {errors.sUnit && <p className="text-red-500">{errors.sUnit}</p>}
        <div className="primary-btn text-center">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepEight;
