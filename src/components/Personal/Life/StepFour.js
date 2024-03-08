import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";


const StepFour = ({ routeHandler }) => {
  const [streetAddress, setstreetAddress] = useLocalSave("streetAddress", "");
  const [unit, setunit] = useLocalSave("unit#", "");


  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/personal/life?question=5");
  };
  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>And at what address in Los Angeles</p>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-14 my-10">
          <input
            placeholder="Street"
            value={streetAddress}
            onChange={(e) => setstreetAddress(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />
          <input
            placeholder="Suit/Unit#"
            value={unit}
            onChange={(e) => setunit(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />
        </div>
        <div className="primary-btn">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepFour;
