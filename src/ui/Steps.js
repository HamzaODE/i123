import React from "react";

const Steps = ({ question, totalQuestions }) => {
  return (
    <div className="flex justify-center gap-2">
      {totalQuestions?.map((ele, index) => (
        <div
          className={`${
            index + 1 <= question
              ? "bg-[#646498]"
              : "bg-white border-[#646498] border-[1px]"
          } h-2 w-20`}
        ></div>
      ))}
    </div>
  );
};

export default Steps;
