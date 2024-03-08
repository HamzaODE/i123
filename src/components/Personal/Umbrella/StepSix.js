import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";


const StepSix = ({ routeHandler }) => {
  const [noOfProperties, setNoOfProperties] = useLocalSave("noOfProperties", "");


  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/personal/umbrella?question=7");
  };
  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>How many properties do you own?</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10">
        <select
            value={noOfProperties}
            onChange={(e) => setNoOfProperties(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          >
            <option value="">Number of Properties</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            
          </select>
        </div>
        <div className="primary-btn">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepSix;
