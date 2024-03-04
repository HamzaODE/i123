import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";



const StepTwenty = ({ routeHandler }) => {
  const [Internet, setInternet] = useLocalSave("internetServiceProvider", "");


  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/CyberLiability?question=21");
  };
  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">What is your Internet Service Provider</p>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col  gap-4 lg:gap-14 my-10">
          <input
            placeholder="Bellsouth, Cox, Comcast, Charter, etc"
            value={Internet}
            onChange={(e) => setInternet(e.target.value)}
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

export default StepTwenty;