import React from "react";
import { Link } from "react-router-dom";

const StepOne = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="bg-white p-5 rounded shadow">
            <div className="card-header">
              <h2 className="text-2xl font-bold mb-4">Business insurance</h2>
              <p className="text-center mb-5">What coverages do you want?</p>
            </div>
            <div className="card-body">
              <div className="flex flex-wrap justify-content-center align-items-center">
                <Link to="/personal/auto?question=1" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full inline-block m-2 shadow">
                  Auto
                </Link>
                <Link to="/personal/home?question=1" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full inline-block m-2 shadow">
                  Home
                </Link>
                <Link to="/personal/medical?question=1" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full inline-block m-2 shadow">
                  Medical
                </Link>
              </div>
              <div className="flex flex-wrap justify-content-center align-items-center mt-5">
                <Link to="/personal/life?question=1" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full inline-block m-2 shadow">
                  Life
                </Link>
                <Link to="/personal/umbrella?question=1" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full inline-block m-2 shadow">
                  Umbrella
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;