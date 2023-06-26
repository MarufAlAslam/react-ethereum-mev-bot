import React from "react";
import shape from "../../assets/images/svg/shape-gray.svg";

const RefferCode = () => {
  return (
    <div className="feature-card rounded-md">
      <div className="inline-flex items-center py-3 pl-4 pr-4 bg-[#393939] rounded-t-md relative">
        <div className="relative z-20 flex justify-start items-center">
          {/* <img src={item.img} alt="" /> */}
          <h1 className="text-white text-xl ml-2">My Refferel Code</h1>
        </div>
        <img
          src={shape}
          alt=""
          className="shape absolute h-full right-[-50px]"
        />
      </div>

      <div className="border-2 flex flex-col gap-4 border-[#393939] p-5 rounded-r rounded-b">
        <div className="text-center">
          <span className="text-xl inline-block px-3 py-1 border border-[#393939] rounded mb-4 bg-[#1D1D1D]">
            QQ64
          </span>
          <p className="text-white">
            Refer your friends and You make an extra 5% on their profits.
          </p>

          <div className="mt-5">
            <form className="flex gap-2 justify-between items-center">
              <input
                type="text"
                className="border-2 border-[#589B74] bg-[#0E1F17] rounded-md px-4 py-2 w-full"
                placeholder="Referral ID"
              />

              <button className="btn text-center btn-green flex w-auto mx-auto justify-center items-center border-2 border-[#589B74] bg-[#0E1F17] rounded-md px-4 py-2">
                Go
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefferCode;
