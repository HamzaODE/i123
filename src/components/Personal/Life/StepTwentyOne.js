import { useState } from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepTwentyOne = ({ routeHandler }) => {
  const [motorRacingType, setMotorRacingType] = useLocalSave("motorRacingType", []);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCheckboxChange = (activity) => {
    setErrorMessage("");
    const updatedActivities = motorRacingType.includes(activity)
      ? motorRacingType.filter((item) => item !== activity)
      : [...motorRacingType, activity];
      setMotorRacingType(updatedActivities);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (motorRacingType.length === 0) {
      setErrorMessage("Please select at least one activity");
    } else {
      const activityRoutes = {
        "Motorcycle racing": "/personal/life?question=22",
        "Motorcar racing": "/personal/life?question=27",
        "Motorboat racing": "/personal/life?question=30",
      };
      routeHandler(activityRoutes[motorRacingType[0]]);
    }
  };

  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>MOTOR RACING: UnSpecific</p>
      <p>Please specify:</p>
      <form onSubmit={submitHandler}>
        <div className="grid grid-cols-1  gap-8 my-5 mx-auto">
          <div className="row flex flex-col justify-center items-center">
            <label className="col flex items-center gap-2">
              <input
                type="checkbox"
                value="Motorcycle racing"
                checked={motorRacingType.includes("Motorcycle racing")}
                onChange={() => handleCheckboxChange("Motorcycle racing")}
              />
              Motorcycle racing
            </label>
            <label className="col flex items-center gap-2">
              <input
                type="checkbox"
                value="Motorcar racing"
                checked={motorRacingType.includes("Motorcar racing")}
                onChange={() => handleCheckboxChange("Motorcar racing")}
              />
              Motorcar racing
            </label>
            <label className="col flex items-center gap-2">
              <input
                type="checkbox"
                value="Motorboat racing"
                checked={motorRacingType.includes("Motorboat racing")}
                onChange={() => handleCheckboxChange("Motorboat racing")}
              />
              Motorboat racing
            </label>
          </div>
          <div className="row flex flex-col justify-center items-center">
          </div>
          <div className="row flex flex-col justify-center items-center">
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

export default StepTwentyOne;
