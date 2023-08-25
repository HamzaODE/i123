import React, { useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);
const StepSeven = ({ routeHandler }) => {
  const [chartData, setChartData] = useState({
    // ...chart data
  });
  return (
    <>
      {" "}
      <div>
        <p>Last screen</p>
        <p>Circular Bar here</p>
        We can get you a more accurate quote if you answer a few more questions
        for us!
      </div>
      <button
        onClick={() => routeHandler("/more?question=1")}
        className="text-[18px] border-[#AEADC8] px-8 rounded-2xl py-[2px] border-[1px] text-[#646498]"
      >
        Continue
      </button>
    </>
  );
};

export default StepSeven;
