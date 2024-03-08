import React, { useState } from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepFifteen = ({ routeHandler }) => {
  const [gl, setGL] = useLocalSave("GLCarrier", "");
  const [Premium, setPremium] = useLocalSave("GLPremium", "");
  const [exp, setExp] = useLocalSave("GLExpiration", "");
  const [glError, setGlError] = useState("");
  const [premiumError, setPremiumError] = useState("");
  const [expError, setExpError] = useState("");

  const validate = () => {
    let isValid = true;
    if (!gl) {
      setGlError("Please select a GL Carrier.");
      isValid = false;
    } else {
      setGlError("");
    }

    if (!Premium) {
      setPremiumError("Please enter the Total Premium.");
      isValid = false;
    } else {
      setPremiumError("");
    }

    if (!exp) {
      setExpError("Please enter the Expiration Date.");
      isValid = false;
    } else {
      setExpError("");
    }

    return isValid;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validate()) {
      routeHandler("/Umbrella?question=16");
    }
  };

  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">Please provide the details of your current General Liability Policy</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10">
          <select
            placeholder="Current GL Carrier"
            value={gl}
            onChange={(e) => setGL(e.target.value)}
            className="col-sm-4 border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          >
            <option value="">Select Current GL Carrier</option>
            <option value="AETNA">AETNA</option>
            <option value="Allied" >Allied </option>
            <option value="Amerident">Amerident</option>
            <option value="Ameritas">Ameritas</option>
            <option value="AMOCO">AMOCO</option>
            <option value="AWL">AWL</option>
            <option value="Beere &amp; Purves">Beere &amp; Purves</option>
            <option value="Berkley Life Insurance Company">Berkley Life Insurance Company</option>
            <option value="Best Plans">Best Plans</option>
            <option value="Blue Cross">Blue Cross</option>
            <option value="Blue Shield">Blue Shield</option>
            <option value="California Choice">California Choice</option>
            <option value="CCBSure">CCBSure</option>
            <option value="CNA">CNA</option>
            <option value="Combined Insurance Co.">Combined Insurance Co.</option>
            <option value="Delta Dental">Delta Dental</option>
            <option value="EFU">EFU</option>
            <option value="Farmers Insurance">Farmers Insurance</option>
            <option value="Financial Keyosk">Financial Keyosk</option>
            <option value="Firemans Fund">Firemans Fund</option>
            <option value="GBG">GBG</option>
            <option value="Gray Stone">Gray Stone</option>
            <option value="Great West">Great West</option>
            <option value="Guardian">Guardian</option>
            <option value="Hartford">Hartford</option>
            <option value="HCC-Total Event Insurance">HCC-Total Event Insurance</option>
            <option value="Health Net">Health Net</option>
            <option value="HIPC*">HIPC*</option>
            <option value="Home Life">Home Life</option>
            <option value="Hull &amp; Co.">Hull &amp; Co.</option>
            <option value="Insurance Helper">Insurance Helper</option>
            <option value="John Alden">John Alden</option>
            <option value="K&amp;K - K&amp;K Insurance Group, Inc">K&amp;K - K&amp;K Insurance Group, Inc</option>
            <option value="Kaiser">Kaiser</option>
            <option value="Life Guard">Life Guard</option>
            <option value="Lincoln National">Lincoln National</option>
            <option value="MetLife">MetLife</option>
            <option value="Neitclem Wholesale Ins.">Neitclem Wholesale Ins.</option>
            <option value="New Market">New Market</option>
            <option value="New York Life">New York Life</option>
            <option value="NONE">NONE</option>
            <option value="northwest">northwest</option>
            <option value="Not Insured">Not Insured</option>
            <option value="Other">Other</option>
            <option value="Pacific Care">Pacific Care</option>
            <option value="Penn Mutual">Penn Mutual</option>
            <option value="Principal Mutual">Principal Mutual</option>
            <option value="Provident">Provident</option>
            <option value="Prudential">Prudential</option>
            <option value="Richter Robb Pacific">Richter Robb Pacific</option>
            <option value="Riverport Insurance Company">Riverport Insurance Company</option>
            <option value="Seechange">Seechange</option>
            <option value="State Farm">State Farm</option>
            <option value="state fund">state fund</option>
            <option value="State Fund">State Fund</option>
            <option value="Sterling Specialty">Sterling Specialty</option>
            <option value="Superior Access">Superior Access</option>
            <option value="Travelers Insurance">Travelers Insurance</option>
            <option value="Unum">Unum</option>
            <option value="USLI">USLI</option>
            <option value="Via Comp">Via Comp</option>
          </select>
          {glError && <p className="text-red-500">{glError}</p>}
          <input
            type="text" 
            placeholder="Total Premium"
            value={Premium}
            onInput={(e) => {
              const value = e.target.value.replace(/\D/g, ""); 
              setPremium(value ? `$${value}` : ""); // 
            }}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />
          {premiumError && <p className="text-red-500">{premiumError}</p>}
        </div>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10">
          <input
            type="date"
            placeholder="Expiration Date"
            value={exp}
            onChange={(e) => setExp(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />
          {expError && <p className="text-red-500">{expError}</p>}
        </div>
        <div className="primary-btn text-center">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepFifteen;
