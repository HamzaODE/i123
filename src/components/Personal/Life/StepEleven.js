import useLocalSave from "../../../hooks/useLocalSave";
import { useState } from "react";

const StepEleven = ({ routeHandler }) => {
  const [activities, setActivities] = useLocalSave("activities", []);
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
        "Skydiving": "/personal/life?question=12",
        "Scuba diving": "/personal/life?question=17",
        "Racing": "/personal/life?question=21",
        "Mountain climbing": "/personal/life?question=33",
        "Hang gliding": "/personal/life?question=16",
        "Ultralight flying": "/personal/life?question=17",
        "Extreme activities": "/personal/life?question=18",
        "None of these": "/personal/life?question=19"
      };
      routeHandler(activityRoutes[activities[0]]);
    }
  };

  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>Answer a few questions, and apply to be covered immediately. First up, tell us about your activities.</p>
      <p>Do you have plans to engage in any of the following activities within the next 2 years?</p>
      <form onSubmit={submitHandler}>
        <div className="grid grid-cols-2 col-sm-6 gap-8 my-10 mx-auto">
          <div className="row flex flex-col justify-center items-center">
            <label className="col flex items-center gap-2">
              <input
                type="checkbox"
                value="Skydiving"
                checked={activities.includes("Skydiving")}
                onChange={() => handleCheckboxChange("Skydiving")}
              />
              Skydiving
            </label>
            <label className="col flex items-center gap-2">
              <input
                type="checkbox"
                value="Scuba diving"
                checked={activities.includes("Scuba diving")}
                onChange={() => handleCheckboxChange("Scuba diving")}
              />
              Scuba diving
            </label>
          </div>
          <div className="row flex flex-col justify-center items-center">
            <label className="col flex items-center gap-2">
              <input
                type="checkbox"
                value="Racing"
                checked={activities.includes("Racing")}
                onChange={() => handleCheckboxChange("Racing")}
              />
              Racing
            </label>
            <label className="col flex items-center gap-2">
              <input
                type="checkbox"
                value="Mountain climbing"
                checked={activities.includes("Mountain climbing")}
                onChange={() => handleCheckboxChange("Mountain climbing")}
              />
              Mountain climbing
            </label>
          </div>
          <div className="row flex flex-col justify-center items-center">
            <label className="col flex items-center gap-2">
              <input
                type="checkbox"
                value="Hang gliding"
                checked={activities.includes("Hang gliding")}
                onChange={() => handleCheckboxChange("Hang gliding")}
              />
              Hang gliding
            </label>
            <label className="col flex items-center gap-2">
              <input
                type="checkbox"
                value="Ultralight flying"
                checked={activities.includes("Ultralight flying")}
                onChange={() => handleCheckboxChange("Ultralight flying")}
              />
              Ultralight flying
            </label>
          </div>
          <div className="row flex flex-col justify-center items-center">
            <label className="col flex items-center gap-2">
              <input
                type="checkbox"
                value="Extreme activities"
                checked={activities.includes("Extreme activities")}
                onChange={() => handleCheckboxChange("Extreme activities")}
              />
              Extreme activities
            </label>
            <label className="col flex items-center gap-2">
              <input
                type="checkbox"
                value="None of these"
                checked={activities.includes("None of these")}
                onChange={() => handleCheckboxChange("None of these")}
              />
              None of these
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

export default StepEleven;
