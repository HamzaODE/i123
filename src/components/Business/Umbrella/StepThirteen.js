import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";



const StepThirteen = ({ routeHandler }) => {
  const [website, setWebsite] = useLocalSave("website", "");


  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/Umbrella?question=14");
  };
  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">What is 's website?</p>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col  gap-4 lg:gap-14 my-10">
          <input
            placeholder="https://www.example.com"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
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

export default StepThirteen;
