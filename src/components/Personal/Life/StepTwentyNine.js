import { useState } from "react";
import useLocalSave from "../../../hooks/useLocalSave";

const StepTwentyNine = ({ routeHandler }) => {
  const [motorRacingType, setMotorRacingType] = useLocalSave("motorRacingType", []);
  const [motorCarRacingType, setMotorCarRacingType] = useLocalSave("motorCarRacingType", "");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCheckboxChange = (activity) => {
    setMotorCarRacingType(activity);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!motorCarRacingType) {
      setErrorMessage("Please select a racing type");
      return;
    }
    setMotorCarRacingType(motorCarRacingType);
    routeHandler('/personal/life?question=26');
  };

  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>MOTOR RACING: {motorRacingType}</p>
      <p>Please specify:</p>
      <form onSubmit={submitHandler}>
        <div className="grid grid-cols-1  gap-8 my-5 mx-auto">
          <div className="row flex flex-col justify-center items-center">
            {["Championship (Indy) auto racing", "Drag racing", "Formula racing (Grand Prix)", "Kart racing", "Legends car racing (Bandolero, Thunder Roadsters), all classes", "Sports car club of America (SCCA) club racing", "Grand Touring, highly modified race cars, designed to mimic production cars.", "Improved Touring, entry level series made up of 4-6 cylinder cars with limited modifications.", "Production, mass produced sports cars modified to improve performance and safety.", "Rally", "Stock car racing (NASCAR-National Association for Stock Car Auto Racing)", "Other"].map(activity => (
              <label className="col flex items-center gap-2" key={activity}>
                <input
                  type="checkbox"
                  value={activity}
                  checked={motorCarRacingType === activity}
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

export default StepTwentyNine;
