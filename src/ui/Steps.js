import React from "react";
import leftIcon from '../assets/images/chevron_left.svg'
import { useNavigate, useSearchParams } from "react-router-dom";


const routeHandler = (newRoute, navigate) => {
  navigate(newRoute, { replace: true });
};


const Steps = ({ question, totalQuestions }) => {
  const navigate = useNavigate();

  return (<>
    {question == 1 ? '' :
      <img src={leftIcon}
        className="back-icon" alt="sdsd"
        onClick={() =>
          routeHandler(
            question == 1
              ? "/"
              : `/dummy?question=${question - 1}`, navigate
          )
        } />
    }

    <div className="flex flex-wrap justify-center gap-2">
      {totalQuestions?.map((ele, index) => (
        <div
          className={`${index + 1 <= question
            ? "bg-[#646498]"
            : "bg-white border-[#646498] border-[1px]"
            } h-2 w-20`}
        ></div>
      ))}
    </div></>
  );
};

export default Steps;
