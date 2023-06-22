import React from "react";
import { Link } from "react-router-dom";
import shape from "../../assets/images/svg/shape-gray.svg"

const Manage = ({manageData}) => {
  return (
    <div className="feature-card rounded-md">
      <div className="inline-flex items-center py-3 pl-4 pr-4 bg-[#393939] rounded-t-md relative">
        <div className="relative z-20 flex justify-start items-center">
          {/* <img src={item.img} alt="" /> */}
          <h1 className="text-white text-xl ml-2">Manage</h1>
        </div>
        <img
          src={shape}
          alt=""
          className="shape absolute h-full right-[-50px]"
        />
      </div>

      <div className="border-2 flex flex-col gap-4 border-[#393939] p-5 rounded-r rounded-b">
        {manageData.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="text-[#fff] bg-[#0E1F17] border-[2px] flex justify-between items-center w-full rounded-lg border-[#589B74] p-3"
          >
            <div className="flex justify-start gap-4 items-center">
              {item.icon}
              <span className="text-lg">{item.title}</span>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22.428"
              height="18.695"
              viewBox="0 0 22.428 18.695"
            >
              <path
                id="arrow"
                d="M8.933,20.41H27.578l-7.139-6.8a.936.936,0,1,1,1.289-1.357l8.151,7.769a1.866,1.866,0,0,1-.016,2.661l-8.141,7.75a.936.936,0,0,1-1.289-1.357l7.169-6.8H8.933a.933.933,0,1,1,0-1.866Z"
                transform="translate(-8 -11.997)"
                fill="#fff"
              />
            </svg>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Manage;
