import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepFive = ({ routeHandler }) => {
  const [vin, setVin] = useLocalSave("VIN", "");

  const handleVinChange = (e) => {
    let value = e.target.value.toUpperCase(); // Convert to uppercase for consistency
    // Remove spaces from the input value
    value = value.replace(/\s/g, '');
    // Allow only 17 characters
    if (value.length <= 17) {
      setVin(value);
    }
  };
  

  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/personal/auto?question=6");
  };

  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>Great! Let's talk about your cars.</p>
      <b>Vehicle 1 info</b>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10">
          <input
            placeholder="Check VIN"
            value={vin}
            onChange={handleVinChange}
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

export default StepFive;
