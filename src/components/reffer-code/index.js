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
                Reffer your friends and they will get 10% discount on their first depostit. You make an extra 5% on their points.
            </p>
        </div>
      </div>
    </div>
  );
};

export default RefferCode;
