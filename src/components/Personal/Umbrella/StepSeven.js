import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";



const StepSeven = ({ routeHandler }) => {
  const [email, setEmail] = useLocalSave("email", "");
  const [number, setNumber] = useLocalSave("number", "");


  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/personal/umbrella?question=7");
  };
  return (
    <div className="text-center text-[30px] font-light text-black">
      <p className="text-center">Thanks ! Please provide your best contact information to finalize your quote.<br/> Don't worry, we never sell or share your info.
      </p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center lg:flex-row gap-4 lg:gap-14 my-10">
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />
          <input
            placeholder="Contact Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
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

export default StepSeven;