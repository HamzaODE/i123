import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepFour = ({ routeHandler }) => {
  const [streetAddress, setStreetAddress] = useLocalSave("streetAddress", "");
  const [unit, setUnit] = useLocalSave("unit#", "");

  const handleStreetAddressChange = (e) => {
    const value = e.target.value;
    // Allow only alphanumeric characters, spaces, and commas
    if (/^[a-zA-Z0-9\s,]*$/.test(value)) {
      setStreetAddress(value);
    }
  };

  const handleUnitChange = (e) => {
    const value = e.target.value;
    // Allow only alphanumeric characters and spaces
    if (/^[a-zA-Z0-9\s]*$/.test(value)) {
      setUnit(value);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/personal/auto?question=5");
  };

  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>And at what address in Los Angeles</p>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-14 my-10">
          <input
            placeholder="Street"
            value={streetAddress}
            onChange={handleStreetAddressChange}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />
          <input
            placeholder="Suite/Unit#"
            value={unit}
            onChange={handleUnitChange}
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
