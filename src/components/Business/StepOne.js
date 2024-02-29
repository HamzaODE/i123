import React from "react";
import { Link } from "react-router-dom";

const StepOne = () => {
  return (

    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 ">
          <div className="card">
            <div className="card-header">Business insurance</div>
            <div className="card-body">
              <p className="text-center mb-5">What coverages do you want?</p>
              <div className="row mb-3">
                <div className="flex justify-betweens">
                  <Link to="/GeneralLiability?question=1" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full inline-block relative z-10 border-4 border-transparent hover:border-gray-800 transition-all duration-300 mr-5 ">
                    General Liability
                  </Link>
                  <Link to="/GroupMedical?question=1" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full inline-block relative z-10 border-4 border-transparent hover:border-gray-800 transition-all duration-300 mr-5 ">
                    Group Medical
                  </Link>
                  <Link to="/WorkersComp?question=1" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full inline-block relative z-10 border-4 border-transparent hover:border-gray-800 transition-all duration-300 ">
                    Workers Comp
                  </Link>
                </div>
                <div className="flex justify-between mt-5 mb-5">
                  <Link to="/CyberLiability?question=1" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full inline-block relative z-10 border-4 border-transparent hover:border-gray-800 transition-all duration-300 mr-5 ">
                    Cyber Liability
                  </Link>
                  <Link to="/Epli?question=1" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full inline-block relative z-10 border-4 border-transparent hover:border-gray-800 transition-all duration-300 mr-5 pl-5 pr-5 ml-5">
                    Epli    
                  </Link>
                  <Link to="/Umbrella?question=1" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full inline-block relative z-10 border-4 border-transparent hover:border-gray-800 transition-all duration-300 ml-5">
                    Umbrella
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default StepOne;