import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepFive = ({ routeHandler }) => {
  const [gender, setGender] = useLocalSave("gender", "");

  const submitHandler = (e, selectedGender) => {
    e.preventDefault();
    setGender(selectedGender);
    routeHandler("/personal/life?question=6");
  };

  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">Are you a male or female?</p>
      <div className="flex flex-row  gap-4 lg:gap-14 my-10">
        <div className="primary-btn col text-center">
          <button type="submit" onClick={(e) => submitHandler(e, "Male")}>Male</button>
        </div>
        <div className="primary-btn col ">
          <button type="submit" onClick={(e) => submitHandler(e, "Female")}>Female</button>
        </div>
      </div>
    </div>
  );
};

export default StepFive;
