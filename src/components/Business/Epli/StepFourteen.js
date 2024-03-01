import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";



const StepFourteen = ({ routeHandler }) => {
  const [below60k, setBelow60k] = useLocalSave("salaryBelow60k", "");
  const [between60k120k, setBetween60k120k] = useLocalSave("salaryBetween60k120k", "");
  const [over120k, setOver120k] = useLocalSave("salaryOver120k", "");


  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/Epli?question=15");
  };
  return (
    <div className="text-Left text-[30px] font-light text-black">
      <form onSubmit={submitHandler}>
          <p>Please select the percentage of employees in these salary ranges:</p><br /><br />
          <label>Salary below 60k:</label>
          <select className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[16px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" value={below60k} onChange={(e) => setBelow60k(e.target.value)}>
            <option value="">-- Select --</option>
            {[...Array(11).keys()].map((percent) => (
              <option key={percent * 10} value={`${percent * 10}%`}>{`${percent * 10}%`}</option>
            ))}
          </select><br /><br />

          <label>Between 60k-120k:</label>
          <select className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[16px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" value={between60k120k} onChange={(e) => setBetween60k120k(e.target.value)}>
            <option value="">-- Select --</option>
            {[...Array(11).keys()].map((percent) => (
              <option key={percent * 10} value={`${percent * 10}%`}>{`${percent * 10}%`}</option>
            ))}
          </select><br /><br />

          <label>Over 120k:</label>
          <select className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[16px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" value={over120k} onChange={(e) => setOver120k(e.target.value)}>
            <option value="">-- Select --</option>
            {[...Array(11).keys()].map((percent) => (
              <option key={percent * 10} value={`${percent * 10}%`}>{`${percent * 10}%`}</option>
            ))}
          </select>
          <div className="primary-btn text-center mt-4">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>

  );
};

export default StepFourteen;
