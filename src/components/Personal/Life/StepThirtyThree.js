import { useState } from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepThirtyThree = ({ routeHandler }) => {
  const [mountainClimbingType, setMountainClimbingType] = useLocalSave("mountainClimbingType", []);
  const [indoor, setIndoor] = useState(false);
  const [outdoor, setOutdoor] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleIndoorChange = () => {
    setIndoor(!indoor);
    setOutdoor(false); // Ensure only one option is selected
    setMountainClimbingType("Indoor mountain climbing");
  };

  const handleOutdoorChange = () => {
    setOutdoor(!outdoor);
    setIndoor(false); // Ensure only one option is selected
    setMountainClimbingType("Outdoor mountain climbing");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!indoor && !outdoor) {
      setErrorMessage("Please select an option");
      return;
    }
    const nextQuestion = indoor ? 33 : 34; 
    routeHandler(`/personal/life?question=${nextQuestion}`);
  };

  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>MOUNTAIN CLIMBING </p>
      <p>Where do you climb?</p>
      <form onSubmit={submitHandler}>
        <div className="grid grid-cols-1  gap-8 my-5 mx-auto">
          <div className="row flex flex-col justify-center items-center">
            <label className="col flex items-center gap-2">
              <input
                type="checkbox"
                checked={indoor}
                onChange={handleIndoorChange}
              />
              Indoor
            </label>
            <label className="col flex items-center gap-2">
              <input
                type="checkbox"
                checked={outdoor}
                onChange={handleOutdoorChange}
              />
              Outdoor
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

export default StepThirtyThree;
