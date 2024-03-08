import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";


const StepEight = ({ routeHandler }) => {
  const [dname, setDName] = useLocalSave("dependantName", "");
  const [dgender, setDGender] = useLocalSave("dependantGender", "");
  const [dDOB, setDDOB] = useLocalSave("dependantDOB", "");
  const [drelation, setDRelation] = useLocalSave("dependantRelationship", "");


  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/personal/medical?question=9");
  };
  return (
    <div className="text-center text-[30px] font-light text-black">
      <b>Dependant details?</b>
      <p>Dependant 1</p>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-14 my-10">
          <input
            placeholder="Dependant Name"
            value={dname}
            onChange={(e) => setDName(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />
          <select
            value={dgender}
            onChange={(e) => setDGender(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          >
            <option>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-14 my-10">
          <input
            placeholder="Date Of Birth"
            value={dDOB}
            onChange={(e) => setDDOB(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          />
          <select
            value={drelation}
            onChange={(e) => setDRelation(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          >
            <option>Select Relationship</option>
            <option value="Spouse">Spouse</option>
            <option value="Child">Child</option>
          </select>
        </div>
        <div className="primary-btn">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepEight;
