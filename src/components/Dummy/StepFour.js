import React from "react";
import stockIcon from "../../assets/images/stock.png";
import useLocalSave from "../../hooks/useLocalSave";


const StepFour = ({ routeHandler }) => {
  const [annualRevenue, setAnnualRevenue] = useLocalSave("annualRevenue", "");


  const questionHandler = () => {
    routeHandler("/get-quote?question=5");
  };
  return (
    <div className="text-black">
      {" "}
      <div className="text-center text-[30px] font-light flex gap-2">
        <p>What is your estimated Annual Revenue?</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        <button
          onClick={() => {
            setAnnualRevenue('0 - 500K');
            questionHandler();
          }}
          className={`${annualRevenue == '0 - 500K' ? 'border-[5px]' : 'border-[1px]'} "flex flex-col justify-center items-center border-[#646498] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"`}
        >
          <img src={stockIcon} alt="computer-icon" className="mt-4 w-70" />
          <p className="text-[15px] font-light text-center mt-2">0 - 500K</p>
        </button>
        <button
          onClick={() => {
            setAnnualRevenue('1M - 3M');
            questionHandler();
          }}
          className={`${annualRevenue == '1M - 3M' ? 'border-[5px]' : 'border-[1px]'} "flex flex-col justify-center items-center border-[#646498] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"`}
        >
          <img src={stockIcon} alt="computer-icon" className="mt-4 w-70" />
          <p className="text-[15px] font-light text-center mt-2">1M - 3M</p>
        </button>
        <button
          onClick={() => {
            setAnnualRevenue('3M - 5M');
            questionHandler();
          }}
          className={`${annualRevenue == '3M - 5M' ? 'border-[5px]' : 'border-[1px]'} "flex flex-col justify-center items-center border-[#646498] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"`}
        >
          <img src={stockIcon} alt="computer-icon" className="mt-4 w-70" />
          <p className="text-[15px] font-light text-center mt-2">3M - 5M</p>
        </button>
        <button
          onClick={() => {
            setAnnualRevenue('500K - 1M');
            questionHandler();
          }}
          className={`${annualRevenue == '500K - 1M' ? 'border-[5px]' : 'border-[1px]'} "flex flex-col justify-center items-center border-[#646498] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"`}
        >
          <img src={stockIcon} alt="computer-icon" className="mt-4 w-70" />
          <p className="text-[15px] font-light text-center mt-2">500K - 1M</p>
        </button>
        <button
          onClick={() => {
            setAnnualRevenue('5M+');
            questionHandler();
          }}
          className={`${annualRevenue == '5M+' ? 'border-[5px]' : 'border-[1px]'} "flex flex-col justify-center items-center border-[#646498] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"`}
        >
          <img src={stockIcon} alt="computer-icon" className="mt-4 w-70" />
          <p className="text-[15px] font-light text-center mt-2">5M+</p>
        </button>
      </div>
      {annualRevenue != '' ?
        <div className="flex justify-center p-4 primary-btn">
          <button onClick={questionHandler} type="submit">Next</button>
        </div>
        : null}
    </div>
  );
};

export default StepFour;
