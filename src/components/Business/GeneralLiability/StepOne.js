import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";


const StepOne = ({ routeHandler }) => {
  const [bName, setBName] = useLocalSave("businessName", "");


  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/GeneralLiability?question=2");
  };
  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p>Tell us about your business</p>
      <form onSubmit={submitHandler}>
        <div className="text-center flex flex-col  gap-4 lg:gap-30 my-10">
          <select
            value={bName}
            onChange={(e) => setBName(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          >
            <option value="">Select Business Type</option>
            <option value="Startups">Startups</option>
            <option value="IT Company">IT Company</option>
            <option value="Commercial auto">Commercial auto</option>
            <option value="Commercial property">Commercial property</option>
            <option value="Fiduciary Liability">Fiduciary Liability</option>
            <option value="Errors & Omissions">Errors & Omissions</option>
            <option value="Directors & Officers">Directors & Officers</option>
            <option value="Janitors">Janitors</option>
            <option value="Constructors">Constructors</option>
            <option value="Saloon">Saloon</option>
            <option value="Trucking">Trucking</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Cyber liability">Cyber liability</option>
            <option value="Crime">Crime</option>
            <option value="Business Owners Policy">Business Owners Policy</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Accounting firms">Accounting firms</option>
            <option value="After school">After school</option>
            <option value="Non profits">Non profits</option>
            <option value="Umbrella Insurance">Umbrella Insurance</option>
            <option value="Product liability">Product liability</option>
            <option value="Inland marine">Inland marine</option>
            <option value="Special event">Special event</option>
            <option value="Liquor liability">Liquor liability</option>
            <option value="Medical Malpractice">Medical Malpractice</option>
            <option value="Ocean marine">Ocean marine</option>
            <option value="Business interruption">Business interruption</option>
            <option value="Equipment breakdown">Equipment breakdown</option>
            <option value="Garage liability">Garage liability</option>
            <option value="Disability liability">Disability liability</option>
            <option value="Pollution">Pollution</option>
          </select>
        </div>
        <div className="primary-btn text-center">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepOne;
