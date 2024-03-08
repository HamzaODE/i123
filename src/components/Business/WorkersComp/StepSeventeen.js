import React, { useState }  from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepSeventeen = ({ routeHandler }) => {
  const [carrier, setCarrier] = useLocalSave("Carrier", "");
  const [exDate, setEXDate] = useLocalSave("carrierExpirationDate", "");
  const [error, setError] = useState("");

  const validateForm = () => {
    const today = new Date();
    const [month, year] = exDate.split("/");
    const expirationDate = new Date(Number(year), Number(month) - 1); // Subtract 1 from month because months are zero-based in JavaScript
  
    if (!/^\d{1,2}\/\d{4}$/.test(exDate.trim()) || expirationDate < today) {
      setError("Please enter a valid expiration date in MM/YYYY format");
      return false;
    }
  
    setError("");
    return true;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    routeHandler("/WorkersComp?question=18");
  };

  return (
    <div className="text-Left text-[30px] font-light text-black">
      <p className="text-center">What is your carrier and expiration date?</p>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-14 my-10">
          <select
            value={carrier}
            onChange={(e) => setCarrier(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          >
            <option value="">Select Carrier</option>
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
          <input
          type="text"
            placeholder="Expiration Date MM/YYYY"
            value={exDate}
            onChange={(e) => setEXDate(e.target.value)}
            className={`border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ${error ? 'border-red-500' : ''}`}
            required
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div className="primary-btn text-center">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepSeventeen;
