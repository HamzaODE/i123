import React from "react";
import useLocalSave from "../../../hooks/useLocalSave";


const StepEight = ({ routeHandler }) => {
  const [stories, setStories] = useLocalSave("stories", "");


  const submitHandler = (e) => {
    e.preventDefault();
    routeHandler("/personal/home?question=9");
  };
  return (
    <div className="text-center text-[30px] font-light text-black">
      <p>Great! How many stories is the home?</p>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center flex-col lg:flex-row gap-4 lg:gap-14 my-10">
          <select
            value={stories}
            onChange={(e) => setStories(e.target.value)}
            className="border-[#646498] border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            required
          >
            <option value="">Number of Stories</option>
            <option value="One story">One story</option>
            <option value="Two Story">Two Story</option>
            <option value="Three Story">Three Story</option>
            <option value="Split Level">Split Level</option>

            
          </select>
        </div>
        <div className="primary-btn">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default StepEight;
