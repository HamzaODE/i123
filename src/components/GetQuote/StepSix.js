import React, { useState } from "react";
import shieldIcon from "../../assets/images/shield.png";
import propertyIcon from "../../assets/images/property.png";
const StepSix = ({ routeHandler }) => {
  const [show, setShow] = useState(false);

  const questionHandler = () => {
    setShow(false);
    routeHandler("/get-quote?question=7");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/get-quote?question=7");
  };
  return (
    <div className="text-black">
      {" "}
      <div className="text-center text-[30px] font-light flex gap-2">
        <p>How much Business Personal Property do you have?</p>
        <img src={shieldIcon} alt="shield-icon" className="h-100 mt-2" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        <button
          onClick={questionHandler}
          className="flex flex-col justify-center items-center border-[1px] border-[#646498] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
        >
          <img src={propertyIcon} alt="computer-icon" className="mt-4 w-70" />
          <p className="text-[15px] font-light text-center mt-2">10K</p>
        </button>
        <button
          onClick={questionHandler}
          className="flex flex-col justify-center items-center border-[1px] border-[#646498] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
        >
          <img src={propertyIcon} alt="computer-icon" className="mt-4 w-70" />
          <p className="text-[15px] font-light text-center mt-2">20K</p>
        </button>
        <button
          onClick={questionHandler}
          className="flex flex-col justify-center items-center border-[1px] border-[#646498] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
        >
          <img src={propertyIcon} alt="computer-icon" className="mt-4 w-70" />
          <p className="text-[15px] font-light text-center mt-2">30K</p>
        </button>
        <button
          onClick={() => setShow(true)}
          className={`border-[1px] border-[#646498] h-40 rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ${
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
          <div className="flex flex-col items-center justify-center my-12">
            <input
              placeholder="Enter value"
              className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
              required
            />
            <p className="font-light text-[30px] mt-4 text-center">
              Enter the size of your Office in sq ft.
            </p>
            <input
              placeholder="Enter size"
              className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
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

export default StepSix;
