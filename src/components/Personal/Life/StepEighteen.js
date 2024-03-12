import useLocalSave from "../../../hooks/useLocalSave";
import { useState } from "react";

const StepEighteen = ({ routeHandler }) => {
  const [scubaDivingActivities, setScubaDivingActivities] = useLocalSave("scubaDivingActivities", []);
  const [errorMessage, setErrorMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const checkedActivities = [
      "Commercial diving",
      "Cave diving",
      "Salvage diving",
      "Treasure diving",
      "Wreck diving",
      "Under ice diving",
      "None of the above"
    ].filter(activity => scubaDivingActivities.includes(activity));

    if (checkedActivities.length === 0) {
      setErrorMessage("Please select at least one activity");
    } else {
      routeHandler("/personal/life?question=19");
    }
  };

  return (
    <div className="text-center  text-[30px] font-light text-black">
      <p>SCUBA DIVING</p>
      <p>Do you participate in any of the following diving activities?</p>
      <form className="flex flex-col " onSubmit={submitHandler}>
        <div className="row">
          <label className="col flex items-center gap-2">
            <input
              type="checkbox"
              value="Commercial diving"
              checked={scubaDivingActivities.includes("Commercial diving")}
              onChange={(e) => setScubaDivingActivities(e.target.checked ? [...scubaDivingActivities, e.target.value] : scubaDivingActivities.filter(activity => activity !== e.target.value))}
            />
            Commercial diving
          </label>
          <label className="col flex items-center gap-2">
            <input
              type="checkbox"
              value="Cave diving"
              checked={scubaDivingActivities.includes("Cave diving")}
              onChange={(e) => setScubaDivingActivities(e.target.checked ? [...scubaDivingActivities, e.target.value] : scubaDivingActivities.filter(activity => activity !== e.target.value))}
            />
            Cave diving
          </label>
        </div>
        <div className="row">
          <label className="col flex items-center gap-2">
            <input
              type="checkbox"
              value="Salvage diving"
              checked={scubaDivingActivities.includes("Salvage diving")}
              onChange={(e) => setScubaDivingActivities(e.target.checked ? [...scubaDivingActivities, e.target.value] : scubaDivingActivities.filter(activity => activity !== e.target.value))}
            />
            Salvage diving
          </label>
          <label className="col flex items-center gap-2">
            <input
              type="checkbox"
              value="Treasure diving"
              checked={scubaDivingActivities.includes("Treasure diving")}
              onChange={(e) => setScubaDivingActivities(e.target.checked ? [...scubaDivingActivities, e.target.value] : scubaDivingActivities.filter(activity => activity !== e.target.value))}
            />
            Treasure diving
          </label>
        </div>
        
        <div className="row">
          <label className="col flex items-center gap-2">
            <input
              type="checkbox"
              value="Wreck diving"
              checked={scubaDivingActivities.includes("Wreck diving")}
              onChange={(e) => setScubaDivingActivities(e.target.checked ? [...scubaDivingActivities, e.target.value] : scubaDivingActivities.filter(activity => activity !== e.target.value))}
            />
            Wreck diving
          </label>
          <label className="col flex items-center gap-2">
            <input
              type="checkbox"
              value="Under ice diving"
              checked={scubaDivingActivities.includes("Under ice diving")}
              onChange={(e) => setScubaDivingActivities(e.target.checked ? [...scubaDivingActivities, e.target.value] : scubaDivingActivities.filter(activity => activity !== e.target.value))}
            />
            Under ice diving
          </label>
        </div>
        <div className="row">
          <label className="col flex items-center gap-2">
            <input
              type="checkbox"
              value="None of the above"
              checked={scubaDivingActivities.includes("None of the above")}
              onChange={(e) => setScubaDivingActivities(e.target.checked ? [...scubaDivingActivities, e.target.value] : scubaDivingActivities.filter(activity => activity !== e.target.value))}
            />
            None of the above
          </label>
        </div>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <div className="primary-btn">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepEighteen;
