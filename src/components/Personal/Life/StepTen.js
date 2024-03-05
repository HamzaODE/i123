import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";


const StepTen = ({ routeHandler }) => {
  const [camount, setCamount] = useLocalSave("coverageAmount", "");
  const [ycoverage, setYOCoverage] = useLocalSave("yearsOfCoverage", "");


  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/personal/life?question=11");
  };
  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>Select your desired coverage amount and term length</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10">
          <div>
            <select
              value={camount}
              onChange={(e) => setCamount(e.target.value)}
              className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
              required
            >
              <option>Select Coverage Amount</option>
              <option value="100000">$100,000</option>
              <option value="150000">$150,000</option>
              <option value="200000">$200,000</option>
              <option value="250000">$250,000</option>
              <option value="300000">$300,000</option>
              <option value="350000">$350,000</option>
              <option value="400000">$400,000</option>
              <option value="450000">$450,000</option>
              <option value="500000">$500,000</option>
              <option value="550000">$550,000</option>
              <option value="600000">$600,000</option>
              <option value="650000">$650,000</option>
              <option value="700000">$700,000</option>
              <option value="750000">$750,000</option>
              <option value="800000">$800,000</option>
              <option value="850000">$850,000</option>
              <option value="900000">$900,000</option>
              <option value="950000">$950,000</option>
              <option value="1000000">$1 million</option>
              <option value="1100000">$1.1 million</option>
              <option value="1200000">$1.2 million</option>
              <option value="1300000">$1.3 million</option>
              <option value="1400000">$1.4 million</option>
              <option value="1500000">$1.5 million</option>
              <option value="1600000">$1.6 million</option>
              <option value="1700000">$1.7 million</option>
              <option value="1800000">$1.8 million</option>
              <option value="1900000">$1.9 million</option>
              <option value="2000000">$2 million</option>
              <option value="2250000">$2.25 million</option>
              <option value="2500000">$2.5 million</option>
              <option value="2750000">$2.75 million</option>
              <option value="3000000">$3 million</option>
              <option value="3250000">$3.25 million</option>
              <option value="3500000">$3.5 million</option>
              <option value="3750000">$3.75 million</option>
              <option value="4000000">$4 million</option>
              <option value="4250000">$4.25 million</option>
              <option value="4500000">$4.5 million</option>
              <option value="4750000">$4.75 million</option>
              <option value="5000000">$5 million</option>
              <option value="5500000">$5.5 million</option>
              <option value="6000000">$6 million</option>
              <option value="6500000">$6.5 million</option>
              <option value="7000000">$7 million</option>
              <option value="7500000">$7.5 million</option>
              <option value="8000000">$8 million</option>

            </select>
          </div>

          <div>
            <select
              value={ycoverage}
              onChange={(e) => setYOCoverage(e.target.value)}
              className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
              required
            >
              <option>Select Years of Coverage</option>
              <option value="10 years">10 years</option>
              <option value="15 years">15 years</option>
              <option value="20 years">20 years</option>
              <option value="25 years">25 years</option>
              <option value="30 years">30 years</option>

            </select>
          </div>
        </div>
        <div className="primary-btn">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepTen;
