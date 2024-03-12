import useLocalSave from "../../../hooks/useLocalSave";
import { useState } from "react";

const StepTwelve = ({ routeHandler }) => {
  const [activities, setActivities] = useLocalSave("skydivingJumps", []);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCheckboxChange = (activity) => {
    setErrorMessage("");
    const updatedActivities = activities.includes(activity)
      ? activities.filter((item) => item !== activity)
      : [...activities, activity];
    setActivities(updatedActivities);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (activities.length === 0) {
      setErrorMessage("Please select at least one activity");
    } else {
      const activityRoutes = {
        "Tandem jumps": "/personal/life?question=13",
        "Static line jumps": "/personal/life?question=13",
        "Freefall jumps": "/personal/life?question=15",
      };
      routeHandler(activityRoutes[activities[0]]);
    }
  };

  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>SKYDIVING</p>
      <p>Do you participate in Tandem, Static Line, or Freefall jumps?</p>
      <form onSubmit={submitHandler}>
        <div className="grid grid-cols-1 col-sm-6 gap-8 my-5 mx-auto">
          <div className="row flex flex-col justify-center items-center">
            <label className="col flex items-center gap-2">
              <input
                type="checkbox"
                value="Tandem jumps"
                checked={activities.includes("Tandem jumps")}
                onChange={() => handleCheckboxChange("Tandem jumps")}
              />
              Tandem jumps
            </label>
          </div>
          <div className="row flex flex-col justify-center items-center">
            <label className="col flex items-center gap-2">
              <input
                type="checkbox"
                value="Static line jumps"
                checked={activities.includes("Static line jumps")}
                onChange={() => handleCheckboxChange("Static line jumps")}
              />
              Static line jumps
            </label>
          </div>
          <div className="row flex flex-col justify-center items-center">
            <label className="col flex items-center gap-2">
              <input
                type="checkbox"
                value="Freefall jumps"
                checked={activities.includes("Freefall jumps")}
                onChange={() => handleCheckboxChange("Freefall jumps")}
              />
              Freefall jumps
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

export default StepTwelve;
