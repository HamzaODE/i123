import React from "react";
import moneyIcon from "../../assets/images/money.png";
import shieldIcon from "../../assets/images/shield.png";
import useLocalSave from "../../hooks/useLocalSave";

const StepFive = ({ routeHandler }) => {
  const [liability, setLiability] = useLocalSave("liabilityLimit", "");


  const questionHandler = () => {
    routeHandler("/get-quote?question=6");
  };

  return (
    <div className="text-black">
      {" "}
      <div className="text-center text-[30px] font-light flex gap- my-4">
        <p>How much Liability Limit do you require?</p>
        <img src={shieldIcon} alt="shield-icon" className="h-100 mt-2" />
      </div>
      <div className="flex justify-center gap-8 my-4">
        <button
          onClick={() => {
            setLiability('$1MM/$2MM');
            questionHandler();
          }}
          className={`${liability == '$1MM/$2MM' ? 'border-[5px]' : 'border-[1px]'} " px-4 flex flex-col justify-center items-center border-[#646498] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"`}
        >
          <img src={moneyIcon} alt="computer-icon" className="mt-4 w-70" />
          <p className="text-[15px] font-light text-center mt-2">$1MM/$2MM</p>
        </button>
        <button
          onClick={() => {
            setLiability('$2MM/$4MM');
            questionHandler();
          }}
          className={`${liability == '$2MM/$4MM' ? 'border-[5px]' : 'border-[1px]'} " px-4 flex flex-col justify-center items-center border-[#646498] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"`}
        >
          <img src={moneyIcon} alt="computer-icon" className="mt-4 w-70" />
          <p className="text-[15px] font-light text-center mt-2">$2MM/$4MM</p>
        </button>
      </div>

      {liability != '' ?
        <div className="flex justify-center p-4 primary-btn">
          <button onClick={questionHandler} type="submit">Next</button>
        </div>
        : null}
    </div>
  );
};

export default StepFive;
