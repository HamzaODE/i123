import React from "react";


const StepFive = ({ routeHandler }) => {

  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/WorkersComp?question=6");
  };
  return (
    <div className="p-8 max-w-sm mx-auto bg-background rounded-xl shadow-md">
    <div className="text-xl font-medium text-center text-primary">
      GENERAL LIABILITY
    </div>
    <div className="flex items-center justify-center mt-4">
      <span className="text-4xl font-semibold text-secondary">1 Million/ 2 Million</span>
      <span className="text-xl font-medium ml-2 text-tertiary">Total Limit</span>
    </div>
    <div className="flex items-center justify-center mt-4">
      <span className="text-4xl font-semibold text-secondary">1 Million</span>
      <span className="text-xl font-medium ml-2 text-tertiary">Per Occurrence</span>
    </div>
    <div className="flex items-center justify-center mt-4">
      <span className="text-4xl font-semibold text-secondary">2 Million</span>
      <span className="text-xl font-medium ml-2 text-tertiary">Property</span>
    </div>
    <div className="flex items-center justify-center mt-4">
      <span className="text-4xl font-semibold text-secondary">100k</span>
      <span className="text-xl font-medium ml-2 text-tertiary">Medical</span>
    </div>
    <div className="flex items-center justify-center mt-8">
      <button className="px-6 py-2 text-white bg-secondary rounded">
        Buy Now
      </button>
    </div>
    <div className="text-xl font-medium text-center text-primary mt-8">
      $342 <span className="text-base font-medium ml-2 text-tertiary">5k GENERAL LIABILITY</span>
    </div>
    <div className="primary-btn text-center">
          <button type="submit"  onClick={submitHandler}>Next</button>
        </div>
  </div>
  );
};

export default StepFive;
