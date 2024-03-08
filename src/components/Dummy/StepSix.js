import React, { useState } from "react";
import shieldIcon from "../../assets/images/shield.png";
import propertyIcon from "../../assets/images/property.png";
import useLocalSave from "../../hooks/useLocalSave";

const StepSix = ({ routeHandler }) => {
  const propertyChoices = ['10K', '20K', '30K']
  const [personalProperty, setPersonalProperty] = useLocalSave("personalProperty", "");
  const [officeValue, setOfficeValue] = useLocalSave("officeValue", "");
  const [officeSize, setOfficeSize] = useLocalSave("officeSize", "");
  // const [show, setShow] = useState(false);

  const [show, setShow] = useState(() => {
    if (propertyChoices.includes(personalProperty)) {
      return false;
    } else if (personalProperty == '') {
      return false;
    } else {
      return true;
    }
  });


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
          onClick={() => {
            setPersonalProperty('10K');
            questionHandler();
          }}
          className={`${personalProperty == '10K' ? 'border-[5px]' : 'border-[1px]'} "flex flex-col justify-center items-center  border-[#646498] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"`}
        >
          <img src={propertyIcon} alt="computer-icon" className="mt-4 w-70" />
          <p className="text-[15px] font-light text-center mt-2">10K</p>
        </button>
        <button
          onClick={() => {
            setPersonalProperty('20K');
            questionHandler();
          }}
          className={`${personalProperty == '20K' ? 'border-[5px]' : 'border-[1px]'} "flex flex-col justify-center items-center  border-[#646498] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"`}
        >
          <img src={propertyIcon} alt="computer-icon" className="mt-4 w-70" />
          <p className="text-[15px] font-light text-center mt-2">20K</p>
        </button>
        <button
          onClick={() => {
            setPersonalProperty('30K');
            questionHandler();
          }}
          className={`${personalProperty == '30K' ? 'border-[5px]' : 'border-[1px]'} "flex flex-col justify-center items-center  border-[#646498] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"`}
        >
          <img src={propertyIcon} alt="computer-icon" className="mt-4 w-70" />
          <p className="text-[15px] font-light text-center mt-2">30K</p>
        </button>
        <button
          onClick={() => setShow(true)}
          className={`border-[#646498] h-40 rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ${show ? 'border-[5px]' : 'border-[1px]'
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
              value={officeValue}
              onChange={(e) => {
                setPersonalProperty(e.target.value);
                setOfficeValue(e.target.value);
              }}
              className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
              required
            />
            <p className="font-light text-[30px] mt-4 text-center">
              Enter the size of your Office in sq ft.
            </p>
            <input
              placeholder="Enter size"
              value={officeSize}
              onChange={(e) => setOfficeSize(e.target.value)}
              className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
              required
            />
          </div>
          {/* <div className="flex justify-center">
            <button
              type="submit"
              className="text-[18px] border-[#AEADC8] px-8 rounded-2xl py-[2px] border-[1px] text-[#646498]"
            >
              Next
            </button>
          </div> */}
        </form>
      )}

      {personalProperty != '' ?
        <div className="flex justify-center p-4 primary-btn">
          <button onClick={questionHandler} type="submit">Next</button>
        </div>
        : null}
    </div>
  );
};

export default StepSix;
