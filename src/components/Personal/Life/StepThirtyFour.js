import { useState } from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepThirtyFour = ({ routeHandler }) => {
  const [climbingTypes, setClimbingTypes] = useLocalSave("climbingTypes", []);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCheckboxChange = (activity) => {
    setClimbingTypes((prevTypes) => {
      if (prevTypes.includes(activity)) {
        return prevTypes.filter((type) => type !== activity); // Remove the activity if already selected
      } else {
        return [...prevTypes, activity]; // Add the activity if not selected
      }
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!climbingTypes.length) {
      setErrorMessage("Please select at least one climbing activity");
      return;
    }

    const routes = {
      "Hiking/ bouldering/ semi-technical climbing (ropes unnecessary)": "/personal/life?question=35",
      "Technical Rock Climbing (ropes necessary)": "/personal/life?question=36",
      "Extreme Technical Rock/ Snow/Ice Climbing (requires serious training/very difficult)": "/personal/life?question=37",
      "Aid Climbing/ Mountaineering (rock too shear for climbing/requires mechanical means for ascending the mountain face)": "/personal/life?question=34"
    };

    const selectedRoutes = climbingTypes.map((type) => routes[type]);
    console.log("Selected Climbing Types:", climbingTypes);
    console.log("Selected Routes:", selectedRoutes);

    // For now, let's just use the first selected route
    routeHandler(selectedRoutes[0]);
  };

  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>ROCK CLIMBING</p>
      <p>What type of climbing do you do, and where?</p>
      <form onSubmit={submitHandler}>
        <div className="grid grid-cols-1 gap-8 my-5 mx-auto">
          <div className="row flex flex-col justify-center items-center">
            {[
              "Hiking/ bouldering/ semi-technical climbing (ropes unnecessary)",
              "Technical Rock Climbing (ropes necessary)",
              "Extreme Technical Rock/ Snow/Ice Climbing (requires serious training/very difficult)",
              "Aid Climbing/ Mountaineering (rock too shear for climbing/requires mechanical means for ascending the mountain face)",
            ].map((activity) => (
              <label className="col flex items-center gap-2" key={activity}>
                <input
                  type="checkbox"
                  value={activity}
                  checked={climbingTypes.includes(activity)}
                  onChange={() => handleCheckboxChange(activity)}
                />
                {activity}
              </label>
            ))}
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

export default StepThirtyFour;
