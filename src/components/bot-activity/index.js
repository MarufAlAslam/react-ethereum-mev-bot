import React from "react";
import shape from "../../assets/images/svg/shape-gray.svg";
import { FaArrowRight } from "react-icons/fa";

const BotActivity = () => {
  const activityData = [
    "Scanning the Mempool"
  ];
  return (
    <div className="feature-card rounded-md">
      <div className="inline-flex items-center py-3 pl-4 pr-4 bg-[#393939] rounded-t-md relative">
        <div className="relative z-20 flex justify-start items-center">
          {/* <img src={item.img} alt="" /> */}
          <h1 className="text-white text-xl ml-2">Bot Activity</h1>
        </div>
        <img
          src={shape}
          alt=""
          className="shape absolute h-full right-[-50px]"
        />
      </div>

      <div className="border-2 min-h-[150px] flex flex-col gap-4 border-[#393939] p-5 rounded-r rounded-b">
        {activityData.map((item, index) => (
          <div className="flex justify-start items-center gap-3">
            <FaArrowRight className="text-green-600" />
            <p className="text-white">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BotActivity;
