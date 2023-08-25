import React, { useState } from "react";
import idIcon from "../../assets/images/id.png";
import PhoneInput from "react-phone-number-input";
const StepTwo = ({ routeHandler }) => {
  const [phoneNo, setPhoneNo] = useState("");
  const [mobileNo, setMobileNo] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/more?question=3");
  };
  return (
    <div className="text-black text-center">
      <img src={idIcon} alt="zip-icon" className="mx-auto" />
      <p className="font-light text-[30px]">
        Thanks! We would also like to get to know you better
      </p>
      <form onSubmit={submitHandler}>
        <p className="text-[20px]">Name of Business Owner*</p>
        <input
          placeholder="Name of owner"
          className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
          required
        />
        <p className="text-[20px] mt-8">Email*</p>
        <input
          type="email"
          placeholder="Email"
          className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
          required
        />
        <p className="text-[20px] mt-8">Office Phone Number*</p>
        <PhoneInput
          placeholder="Enter phone number"
          value={phoneNo}
          onChange={setPhoneNo}
          className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[270px] mx-auto"
          required
        />
        <p className="text-[20px] mt-8">Mobile Number*</p>
        <PhoneInput
          placeholder="Enter phone number"
          value={mobileNo}
          onChange={setMobileNo}
          className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[270px] mx-auto"
          required
        />
        <div className="my-7">
          <button
            type="submit"
            className="text-[18px] border-[#AEADC8] px-8 rounded-2xl py-[2px] border-[1px] text-[#646498]"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default StepTwo;
