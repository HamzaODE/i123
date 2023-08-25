import React, { useState } from "react";
import shieldIcon from "../../assets/images/shield.png";
import computerIcon from "../../assets/images/computer.png";
import ecnomicsIcon from "../../assets/images/ecnomics.png";
import lawyerIcon from "../../assets/images/lawyer.png";
import medicIcon from "../../assets/images/medic.png";
import shopIcon from "../../assets/images/shop.png";
const StepTwo = ({ routeHandler }) => {
  const [show, setShow] = useState(false);

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
        <p>Hey Hamza! Tell us about your business</p>
        <img src={shieldIcon} alt="shield-icon" className="h-100 mt-2" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        <button
          onClick={questionHandler}
          className="flex flex-col justify-center items-center border-[1px] border-[#646498] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
        >
          <img src={computerIcon} alt="computer-icon" className="mt-4 w-70" />
          <p className="text-[15px] font-light text-center mt-2">IT</p>
        </button>
        <button
          onClick={questionHandler}
          className="flex flex-col justify-center items-center border-[1px] border-[#646498] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
        >
          <img src={ecnomicsIcon} alt="computer-icon" className="mt-4 w-70" />
          <p className="text-[15px] font-light text-center mt-2">
            Accounts Office
          </p>
        </button>
        <button
          onClick={questionHandler}
          className="flex flex-col justify-center items-center border-[1px] border-[#646498] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
        >
          <img src={lawyerIcon} alt="computer-icon" className="mt-4 w-70" />
          <p className="text-[15px] font-light text-center mt-2">
            Attorney Offices
          </p>
        </button>
        <button
          onClick={questionHandler}
          className="flex flex-col justify-center items-center border-[1px] border-[#646498] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
        >
          <img src={medicIcon} alt="computer-icon" className="mt-4 w-70" />
          <p className="text-[15px] font-light text-center mt-2">
            Doctors Office
          </p>
        </button>
        <button
          onClick={questionHandler}
          className="flex flex-col justify-center items-center border-[1px] border-[#646498] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
        >
          <img src={shopIcon} alt="computer-icon" className="mt-4 w-70" />
          <p className="text-[15px] font-light text-center mt-2">
            Retails Store
          </p>
        </button>
        <button
          onClick={() => setShow(true)}
          className={`border-[1px] border-[#646498] rounded-2xl c focus:text-white ${
            show && "text-white bg-[#646498]"
          }`}
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
              className="border-[#646498] border-[1px] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] px-4 py-2 text-[18px]"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="text-[18px] border-[#AEADC8] px-8 rounded-2xl py-[2px] border-[1px] text-[#646498]"
            >
              Next
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default StepTwo;
