import React, { useState, useEffect } from "react";
import useLocalSave from "../../hooks/useLocalSave";

import shieldIcon from "../../assets/images/shield.png";
import computerIcon from "../../assets/images/computer.png";
import ecnomicsIcon from "../../assets/images/ecnomics.png";
import lawyerIcon from "../../assets/images/lawyer.png";
import medicIcon from "../../assets/images/medic.png";
import shopIcon from "../../assets/images/shop.png";
import checkIcon from "../../assets/images/check-solid.svg"


const StepTwo = ({ routeHandler }) => {
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


  const handleOtherBusiness = () => {
    setShow(true)
  }

  const questionHandler = () => {
    setShow(false);
    routeHandler("/get-quote?question=3");
  };
  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/get-quote?question=3");
  };


  return (
    <div className="text-black">
      {" "}
      <div className="text-center text-[30px] font-light flex gap-2">
        <p>Hey {fname}! Tell us about your business</p>
        <img src={shieldIcon} alt="shield-icon" className="h-100 mt-2" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        <button
          onClick={() => {
            setBusiness('IT');
            questionHandler();
          }}
          className={`${business == 'IT' ? 'border-[5px]' : 'border-[1px]'} "flex flex-col justify-center items-center border-[#646498] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"`}
        >
          <img src={computerIcon} alt="computer-icon" className="mt-4 w-70" />
          <p className="text-[15px] font-light text-center mt-2">IT</p>
        </button>
        <button
          onClick={() => {
            setBusiness('Accounts Office');
            questionHandler();
          }}
          className={`${business == 'Accounts Office' ? 'border-[5px]' : 'border-[1px]'} "flex flex-col justify-center items-center border-[#646498] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"`}
        >
          <img src={ecnomicsIcon} alt="computer-icon" className="mt-4 w-70" />
          <p className="text-[15px] font-light text-center mt-2">
            Accounts Office
          </p>
        </button>
        <button
          onClick={() => {
            setBusiness('Attorney Offices');
            questionHandler();
          }}
          className={`${business == 'Attorney Offices' ? 'border-[5px]' : 'border-[1px]'} "flex flex-col justify-center items-center border-[#646498] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"`}
        >
          <img src={lawyerIcon} alt="computer-icon" className="mt-4 w-70" />
          <p className="text-[15px] font-light text-center mt-2">
            Attorney Offices
          </p>
        </button>
        <button
          onClick={() => {
            setBusiness('Doctors Office');
            questionHandler();
          }}
          className={`${business == 'Doctors Office' ? 'border-[5px]' : 'border-[1px]'} "flex flex-col justify-center items-center border-[#646498] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"`}
        >
          <img src={medicIcon} alt="computer-icon" className="mt-4 w-70" />
          <p className="text-[15px] font-light text-center mt-2">
            Doctors Office
          </p>
        </button>
        <button
          onClick={() => {
            setBusiness('Retails Store');
            questionHandler();
          }}
          className={`${business == 'Retails Store' ? 'border-[5px]' : 'border-[1px]'} "flex flex-col justify-center items-center border-[#646498] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"`}
        >
          <img src={shopIcon} alt="computer-icon" className="mt-4 w-70" />
          <p className="text-[15px] font-light text-center mt-2">
            Retails Store
          </p>
        </button>
        <button
          onClick={handleOtherBusiness}
          className={` border-[#646498] rounded-2xl ${show ? 'border-[5px]' : 'border-[1px]'}`}
        >
          <p className="text-[15px] font-light text-center flex items-center justify-center h-100">
            Other
          </p>
        </button>
      </div>
      {show && (
        <form onSubmit={submitHandler}>
          <div className="flex justify-center my-12">
            <input
              placeholder="Enter business"
              value={business}
              onChange={(e) => setBusiness(e.target.value)}
              className="border-[#646498] border-[1px] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] px-4 py-2 text-[18px]"
              required
            />
          </div>
        </form>
      )}

      {business != '' ?
        <div className="flex justify-center p-4 primary-btn">
          <button onClick={questionHandler} type="submit">Next</button>
        </div>
        : null}


    </div>
  );
};

export default StepTwo;
