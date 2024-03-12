import { useState } from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepThirtyTwo = ({ routeHandler }) => {
  const [motorRacingType, setMotorRacingType] = useLocalSave("motorRacingType", []);
  const [maxSpeed, setMaxSpeed] = useLocalSave("maxSpeed", []);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCheckboxChange = (activity) => {
    setMaxSpeed(activity);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!maxSpeed.length) {
      setErrorMessage("Please select a diving activity");
      return;
    }
    setMaxSpeed(maxSpeed);
    routeHandler('/personal/life?question=26');
  };

  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>MOTOR RACING: {motorRacingType}</p>
      <p>What are the maximum speeds you race at?</p>
      <form onSubmit={submitHandler}>
        <div className="grid grid-cols-1  gap-8 my-5 mx-auto">
          <div className="row flex flex-col justify-center items-center">
            {["Under 75 mph", "75-100 mph", "101-150 mph", "Over150 mph"].map(activity => (
              <label className="col flex items-center gap-2" key={activity}>
                <input
                  type="checkbox"
                  value={activity}
                  checked={maxSpeed.includes(activity)}
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

export default StepThirtyTwo;
