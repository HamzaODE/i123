import { useState } from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepThirtyOne = ({ routeHandler }) => {
  const [motorRacingType, setMotorRacingType] = useLocalSave("motorRacingType", []);
  const [divingActivities, setDivingActivities] = useLocalSave("divingActivities", []);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCheckboxChange = (activity) => {
    setDivingActivities(activity);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!divingActivities.length) {
      setErrorMessage("Please select a diving activity");
      return;
    }
    setDivingActivities(divingActivities);
    routeHandler('/personal/life?question=32');
  };

  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>MOTOR RACING: {motorRacingType}</p>
      <p>Do you participate in any of the following diving activities?</p>
      <form onSubmit={submitHandler}>
        <div className="grid grid-cols-1  gap-8 my-5 mx-auto">
          <div className="row flex flex-col justify-center items-center">
            {["Drag racing", "Unlimited hydroplanes (Thunderboats)", "Oval or straightaway below 75mph", "Oval or straightaway above 75mph", "Limited local competitions at low speeds (under 90 mph straight) or (under 75 mph oval)"].map(activity => (
              <label className="col flex items-center gap-2" key={activity}>
                <input
                  type="checkbox"
                  value={activity}
                  checked={divingActivities.includes(activity)}
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

export default StepThirtyOne;
