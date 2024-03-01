import React from "react";
import { Link } from "react-router-dom";

const StepOne = () => {
  return (

    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">Business insurance</div>
            <div className="card-body">
              <p className="text-center mb-5">What coverages do you want?</p>
              <div className="d-flex flex-wrap justify-content-center align-items-center">
                <Link to="/personal/auto?question=1" className="mr-5 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full inline-block relative z-10 border-4 border-transparent hover:border-gray-800 transition-all duration-300">
                  Auto
                </Link>
                <Link to="/personal/home?question=1" className="mr-5 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full inline-block relative z-10 border-4 border-transparent hover:border-gray-800 transition-all duration-300">
                  Home
                </Link>
                <Link to="/personal/medical?question=1" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full inline-block relative z-10 border-4 border-transparent hover:border-gray-800 transition-all duration-300">
                  Medical
                </Link>

              </div>
              <div className="d-flex flex-wrap justify-content-center align-items-center mt-5">
                <Link to="/personal/life?question=1" className="mr-5 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full inline-block relative z-10 border-4 border-transparent hover:border-gray-800 transition-all duration-300">
                  Life
                </Link>
                <Link to="/personal/umbrella?question=1" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full inline-block relative z-10 border-4 border-transparent hover:border-gray-800 transition-all duration-300">
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