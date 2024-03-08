import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import useLocalSave from "../../hooks/useLocalSave";

import shieldIcon from "../../assets/images/shield.png";
import computerIcon from "../../assets/images/computer.png";
import ecnomicsIcon from "../../assets/images/ecnomics.png";
import lawyerIcon from "../../assets/images/lawyer.png";
import medicIcon from "../../assets/images/medic.png";
import shopIcon from "../../assets/images/shop.png";
import checkIcon from "../../assets/images/check-solid.svg"

const StepOne = () => {
  const businessChoices = ['IT', 'Accounts Office', 'Attorney Offices', 'Doctors Office', 'Retails Store']
  const [business, setBusiness] = useLocalSave("business", "");
  const [fname, setFName] = useLocalSave("firstName", "");
  const [show, setShow] = useState(() => {
    if (businessChoices.includes(business)) {
      return false;
    } else if (business == '') {
      return false;
    } else {
      return true;
    }
  });
  return (

    <div className="text-black">
      <div className="text-center text-[30px] font-light flex gap-2">
        <p>What coverages do you want for Personal?</p>
        <img src={shieldIcon} alt="shield-icon" className="h-100 mt-2" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        <button
          className={`${business == 'IT' ? 'border-[5px]' : 'border-[1px]'} "border-[5px] border-[1px] flex flex-col justify-center items-center border-[#646498] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"`}
        >
          <Link to="/personal/auto?question=1">
            <img src={ecnomicsIcon} alt="computer-icon" className="mt-4 w-70" />
            <p className="text-[15px] font-light text-center mt-2"><b>Auto</b></p>
          </Link>
        </button>
        <button
          className={`${business == 'Accounts Office' ? 'border-[5px]' : 'border-[1px]'} "flex flex-col justify-center items-center border-[#646498] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"`}
        >
          <Link to="/personal/home?question=1">
            <img src={ecnomicsIcon} alt="computer-icon" className="mt-4 w-70" />
            <p className="text-[15px] font-light text-center mt-2">Home</p>
          </Link>
        </button>
        <button
          className={`${business == 'Attorney Offices' ? 'border-[5px]' : 'border-[1px]'} "flex flex-col justify-center items-center border-[#646498] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"`}
        >
          <Link to="/personal/medical?question=1">
            <img src={lawyerIcon} alt="computer-icon" className="mt-4 w-70" />
            <p className="text-[15px] font-light text-center mt-2">
              Medical
            </p>
          </Link>
        </button>
        <button
          className={`${business == 'Retails Store' ? 'border-[5px]' : 'border-[1px]'} "flex flex-col justify-center items-center border-[#646498] border-[1px] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"`}
        >
          <Link to="/personal/life?question=1">
            <img src={medicIcon} alt="computer-icon" className="mt-4 w-70" />
            <p className="text-[15px] font-light text-center mt-2">
              Life
            </p>
          </Link>
        </button>
        <button
          className={`${business == 'Retails Store' ? 'border-[5px]' : 'border-[1px]'} "flex flex-col justify-center items-center border-[#646498] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"`}
        >
          <Link to="/personal/umbrella?question=1">
            <img src={shopIcon} alt="computer-icon" className="mt-4 w-70" />
            <p className="text-[15px] font-light text-center mt-2">
              Umbrella
            </p>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default StepOne;