import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";


const StepNine = ({ routeHandler }) => {
  const [built, setBuilt] = useLocalSave("builtType", "");


  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/personal/home?question=10");
  };
  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>and is it built on on Slab or Crawlspace? <br/>If you don't know, that's ok, too</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10">
          <select
            value={built}
            onChange={(e) => setBuilt(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          >
            <option value=""> Type of foundation</option>
            <option value="Slab">Slab</option>
            <option value="Crawlspace">Crawlspace</option>
            <option value="Basement">I'm not sure</option>


            
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
