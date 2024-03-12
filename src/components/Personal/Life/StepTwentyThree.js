import useLocalSave from "../../../hooks/useLocalSave";
import { useState } from "react";

const StepTwentyThree = ({ routeHandler }) => {
  const [racingType, setRacingType] = useLocalSave("racingType", []);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCheckboxChange = (activity) => {
    setErrorMessage("");
    const updatedActivities = racingType.includes(activity)
      ? racingType.filter((item) => item !== activity)
      : [...racingType, activity];
    setRacingType(updatedActivities);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (racingType.length === 0) {
      setErrorMessage("Please select at least one activity");
    } else {
      const activityRoutes = {
        "Circuit racing": "/personal/life?question=24",
        "Drag racing": "/personal/life?question=24",
        "Acrobatics": "/personal/life?question=24",
        "Cross country": "/personal/life?question=24",
        "Speedway": "/personal/life?question=24",
        "International events": "/personal/life?question=24",
        "Other": "/personal/life?question=24"
      };
      routeHandler(activityRoutes[racingType[0]]);
    }
  };

  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>MOTOR RACING</p>
      <p>Do you participate in any of the following activities?</p>
      <form onSubmit={submitHandler}>
        <div className="grid grid-cols-1 col-sm-6 gap-8 my-5 mx-auto">
          <div className="row flex flex-col justify-center items-center">
            <label className="col flex items-center gap-2">
              <input
                type="checkbox"
                value="Circuit racing"
                checked={racingType.includes("Circuit racing")}
                onChange={() => handleCheckboxChange("Circuit racing")}
              />
              Circuit racing
            </label>
            <label className="col flex items-center gap-2">
              <input
                type="checkbox"
                value="Drag racing"
                checked={racingType.includes("Drag racing")}
                onChange={() => handleCheckboxChange("Drag racing")}
              />
              Drag racing
            </label>
            <label className="col flex items-center gap-2">
              <input
                type="checkbox"
                value="Acrobatics"
                checked={racingType.includes("Acrobatics")}
                onChange={() => handleCheckboxChange("Acrobatics")}
              />
              Acrobatics
            </label>
            <label className="col flex items-center gap-2">
              <input
                type="checkbox"
                value="Cross country"
                checked={racingType.includes("Cross country")}
                onChange={() => handleCheckboxChange("Cross country")}
              />
              Cross country
            </label>
            <label className="col flex items-center gap-2">
              <input
                type="checkbox"
                value="Speedway"
                checked={racingType.includes("Speedway")}
                onChange={() => handleCheckboxChange("Speedway")}
              />
              Speedway
            </label>
            <label className="col flex items-center gap-2">
              <input
                type="checkbox"
                value="International events"
                checked={racingType.includes("International events")}
                onChange={() => handleCheckboxChange("International events")}
              />
              International events
            </label>
            <label className="col flex items-center gap-2">
              <input
                type="checkbox"
                value="Other"
                checked={racingType.includes("Other")}
                onChange={() => handleCheckboxChange("Other")}
              />
              Other
            </label>
          </div>
        </div>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <div className="primary-btn">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepTwentyThree;
