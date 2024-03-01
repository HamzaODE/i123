import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";



const StepSeventeen = ({ routeHandler }) => {
  const [carrier, setCarrier] = useLocalSave("Carrier", "");
  const [exDate, setEXDate] = useLocalSave("carrierExpirationDate", "");


  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/WorkersComp?question=18");
  };
  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">What is your carrier and expiration date?</p>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-14 my-10">
          <input
            placeholder="Carrier"
            value={carrier}
            onChange={(e) => setCarrier(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />
          <input
            placeholder="Expiration Date"
            value={exDate}
            onChange={(e) => setEXDate(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />
        </div>
        <div className="primary-btn text-center">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepSeventeen;
