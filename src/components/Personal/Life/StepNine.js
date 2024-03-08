import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";


const StepNine = ({ routeHandler }) => {
  const [mortgage, setMortgage] = useLocalSave("mortgage", "");


  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/personal/life?question=10");
  };
  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>What is your remaining mortgage balance?</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10">
        <select
            value={mortgage}
            onChange={(e) => setMortgage(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          >
            <option>Select Mortgage</option>
            <option value="0">$0 - No mortgage</option>
            <option value="100000">$100,000</option>
            <option value="200000">$200,000</option>
            <option value="300000">$300,000</option>
            <option value="400000">$400,000</option>
            <option value="500000">$500,000</option>
            <option value="600000">$600,000</option>
            <option value="700000">$700,000</option>
            <option value="800000">$800,000</option>
            <option value="900000">$900,000</option>
            <option value="1000000">$1 million</option>
            <option value="1100000">$1.1 million</option>
            <option value="1200000">$1.2 million</option>
            <option value="1300000">$1.3 million</option>
            <option value="1400000">$1.4 million</option>
            <option value="1500000">$1.5 million</option>
            <option value="1600000">$1.6 million</option>
            <option value="1700000">$1.7 million</option>
            <option value="1800000">$1.8 million</option>
            <option value="1900000">$1.9 million</option>
            <option value="2000000">$2 million or more</option>


          </select>
        </div>
        <div className="primary-btn">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepNine;
