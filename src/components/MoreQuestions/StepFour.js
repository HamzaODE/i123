import React from "react";
import rocketIcon from "../../assets/images/rocket.png";

const StepFour = ({ routeHandler }) => {
  return (
    <div className="text-black flex flex-col items-center">
      <img src={rocketIcon} alt="rocket-icon" />
      <div className="text-center font-light text-[27px] w-[950px]">
        <p>
          Thank you for purchasing insurance with Insure123! If we have any
          further questions, we will contact you, otherwise we will email your
          final quote.
        </p>
        <p className="my-8">Cheers!</p>
      </div>
      <button
        onClick={() => routeHandler("/")}
        className="text-[18px] border-[#AEADC8] px-8 rounded-2xl py-[2px] border-[1px] text-[#646498]"
      >
        Back Home
      </button>
    </div>
  );
};

export default StepFour;
