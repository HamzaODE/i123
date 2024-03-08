import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";



const StepNine = ({ routeHandler }) => {
  const [description, setDescription] = useLocalSave("businessDesc", "");


  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/Umbrella?question=10");
  };
  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>Could you give us a detailed description of the business?</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center lg:flex-row gap-4 lg:gap-14 my-10">
          <input
            placeholder="Business Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            pattern=".{6,355}"
            className="border-[#646498] border-[1px] rounded-2xl px-8 py-8 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
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

export default StepNine;
