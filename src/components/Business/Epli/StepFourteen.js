import React, { useState } from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepFourteen = ({ routeHandler }) => {
  const [below60k, setBelow60k] = useLocalSave("salaryBelow60k", "");
  const [between60k120k, setBetween60k120k] = useLocalSave("salaryBetween60k120k", "");
  const [over120k, setOver120k] = useLocalSave("salaryOver120k", "");
  const [below60kError, setBelow60kError] = useState("");
  const [between60k120kError, setBetween60k120kError] = useState("");
  const [over120kError, setOver120kError] = useState("");

  const validate = () => {
    let isValid = true;

    if (!below60k) {
      setBelow60kError("Please select the percentage of employees below 60k.");
      isValid = false;
    } else {
      setBelow60kError("");
    }

    if (!between60k120k) {
      setBetween60k120kError("Please select the percentage of employees between 60k-120k.");
      isValid = false;
    } else {
      setBetween60k120kError("");
    }

    if (!over120k) {
      setOver120kError("Please select the percentage of employees over 120k.");
      isValid = false;
    } else {
      setOver120kError("");
    }

    return isValid;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validate()) {
      routeHandler("/Epli?question=15");
    }
  };

  return (
    <div className="text-Left text-[30px] font-light text-black">
      <form onSubmit={submitHandler}>
        <p>Please select the percentage of employees in these salary ranges:</p>
        <div className="flex  lg:flex-row gap-4 lg:gap-14 my-10 col-sm-8">
          <label className="col-sm-4">Salary below 60k:</label>
          <select className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[16px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" value={below60k} onChange={(e) => setBelow60k(e.target.value)}>
            <option value="">-- Select --</option>
            {[...Array(11).keys()].map((percent) => (
              <option key={percent * 10} value={`${percent * 10}%`}>{`${percent * 10}%`}</option>
            ))}
          </select>
        </div>

        <div className="flex  lg:flex-row gap-4 lg:gap-14 my-10 col-sm-8">
          <label className="col-sm-4">Between 60k-120k:</label>
          <select className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[16px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" value={between60k120k} onChange={(e) => setBetween60k120k(e.target.value)}>
            <option value="">-- Select --</option>
            {[...Array(11).keys()].map((percent) => (
              <option key={percent * 10} value={`${percent * 10}%`}>{`${percent * 10}%`}</option>
            ))}
          </select>
        </div>
        <div className="flex  lg:flex-row gap-4 lg:gap-14 my-10 col-sm-8">
          <label className="col-sm-4">Over 120k:</label>
          <select className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[16px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" value={over120k} onChange={(e) => setOver120k(e.target.value)}>
            <option value="">-- Select --</option>
            {[...Array(11).keys()].map((percent) => (
              <option key={percent * 10} value={`${percent * 10}%`}>{`${percent * 10}%`}</option>
            ))}
          </select>
        </div>
        {below60kError && <p className="text-red-500">{below60kError}</p>}
        {between60k120kError && <p className="text-red-500">{between60k120kError}</p>}
        {over120kError && <p className="text-red-500">{over120kError}</p>}

        <div className="primary-btn text-center mt-4">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepFourteen;
