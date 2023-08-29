import React from "react";
import cardIcon from "../../assets/images/card.png";
import cardsImage from "../../assets/images/cards.png";
import iIcon from "../../assets/images/i-icon.png";
const StepThree = ({ routeHandler }) => {
  const submitHandler = () => {
    routeHandler("/more?question=4");
  };
  return (
    <>
      <img src={cardIcon} alt="card-icon" />
      <h1 className="font-light text-[20px] text-center">
        One last step before we get you an accurate quote
      </h1>
      <img src={cardsImage} alt="card-icon" className="my-8" />
      <form
        onSubmit={submitHandler}
        className="md:grid md:grid-cols-2 md:gap-x-5 md:gap-y-3"
      >
        <div>
          <label className="font-medium text-[15px]">Card holder name</label>
          <div>
            <input
              placeholder="Enter your first name..."
              className="border-[#646498] w-full border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
              required
            />
          </div>
        </div>
        <div>
          <label className="font-medium text-[15px]">Card number</label>
          <div>
            <input
              placeholder="Enter your card number..."
              className="border-[#646498] w-full border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
              required
            />
          </div>
        </div>
        <div>
          <label className="font-medium text-[15px]">CVC</label>
          <div>
            <input
              placeholder="Enter your secret code..."
              className="border-[#646498] w-full border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
              required
            />
          </div>
        </div>
        <div>
          <label className="font-medium text-[15px]">Expiration date</label>
          <div>
            <input
              placeholder="MM/YY"
              className="border-[#646498] w-full border-[1px] rounded-2xl px-4 py-2 text-[18px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
              required
            />
          </div>
        </div>
        <div className="col-span-2 border-[2px] my-4 py-2 px-4 rounded-3xl bg-[#BDB4FE61] border-[#646498]">
          <div className="flex items-center gap-2">
            <img src={iIcon} alt="i-icon" className="w-[15px]" />
            <p className="text-[12px] font-semibold text-black m-0">
              Your data is secure
            </p>
          </div>
          <p className="lg:w-[500px] font-light text-black text-[11px] m-0 my-2">
            Insure123 will never share or sell your phone number, address, or
            other information to scammers.
          </p>
        </div>
        <div className="col-span-2 flex justify-center mt-2">
          <button
            type="submit"
            className="text-[18px] border-[#AEADC8] px-8 rounded-2xl py-[2px] border-[1px] text-[#646498]"
          >
            Next
          </button>
        </div>
      </form>
    </>
  );
};

export default StepThree;
