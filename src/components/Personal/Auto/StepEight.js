import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepFourteen = ({ routeHandler }) => {
  const [rentalReimbursement, setRentalReimbursement] = useLocalSave("rentalReimbursement", "");

  const handleYesClick = () => {
    setRentalReimbursement("Yes");
    routeHandler("/personal/auto?question=9");
  };

  const handleNoClick = () => {
    setRentalReimbursement("No");
    routeHandler("/personal/auto?question=9");
  };

  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">Would you like Rental Reimbursement?</p>
      <div className="flex flex-row  gap-4 lg:gap-14 my-10">
        <div className="primary-btn col text-center">
          <button type="button" onClick={handleYesClick}>Yes</button>
        </div>
        <div className="primary-btn col ">
          <button type="button" onClick={handleNoClick}>No</button>
        </div>
      </div>
    </div>
  );
};

export default StepFourteen;
