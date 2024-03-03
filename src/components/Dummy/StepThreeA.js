import React from "react";
import zipIcon from "../../assets/images/zip-icon.png";
import shieldIcon from "../../assets/images/shield.png";
import useLocalSave from "../../hooks/useLocalSave";



const StepThreeA = ({ routeHandler }) => {
  const [zipcode, setZipcode] = useLocalSave("zipcode", "");
  const [business, setBusiness] = useLocalSave("business", "");



  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/get-quote?question=4");
  };
  return (
    <div>
      <img src={zipIcon} alt="zip-icon" className="mx-auto" />
      <div className="text-center text-[30px] font-light flex gap-2 my-4">
        <p>Awesome! And what ZIP code is it located in? {business}</p>
        <img src={shieldIcon} alt="shield-icon" className="h-100 mt-2" />
      </div>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center my-10">
          <input
            type="number"
            placeholder="Enter Zip code"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            className=" border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />
        </div>
        {/* <p className="text-center text-[#646498] text-[40px] font-light">
          San Jose, a great place!
        </p> */}
        <div className="flex justify-center">
          <div className="flex justify-center p-4 primary-btn">
            <button type="submit">Next</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StepThreeA;
