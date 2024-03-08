import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";


const StepEight = ({ routeHandler }) => {
  const [noOfChilds, setNoOfChilds] = useLocalSave("noOfChilds", "");


  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/personal/life?question=9");
  };
  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>How many children do you have?</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10">
        <select
            value={noOfChilds}
            onChange={(e) => setNoOfChilds(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          >
            <option>Number of Child</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>

          </select>
        </div>
        <div className="primary-btn">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepEight;
