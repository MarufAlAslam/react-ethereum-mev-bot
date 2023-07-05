import React from "react";
import shape from "../../assets/images/svg/shape-gray.svg";
import Buy from "../../pages/buy";
import { useState } from "react";

// import { GrClose } from "react-icons/gr";
import { IoCloseSharp } from "react-icons/io5";

const Subscription = () => {
  const [showBuy, setShowBuy] = useState(false);
  return (
    <div className="feature-card rounded-md">
      <div className="inline-flex items-center py-3 pl-4 pr-4 bg-[#393939] rounded-t-md relative">
        <div className="relative z-20 flex justify-start items-center">
          {/* <img src={item.img} alt="" /> */}
          <h1 className="text-white text-xl ml-2">Subscription</h1>
        </div>
        <img
          src={shape}
          alt=""
          className="shape absolute h-full right-[-50px]"
        />
      </div>

      <div className="border-2 flex flex-col gap-4 border-[#393939] p-5 rounded-r rounded-b">
        <p className="text-white text-lg text-center ls-2">
          Your Free Trial ends in
        </p>
        <div className="flex justify-between items-center gap-3">
          <div className="text-xl text-custom text-center ls-2 inline-block px-3 py-1 border border-[#393939] rounded mb-4 bg-[#1D1D1D]">
            04
            <br />
            Days
          </div>
          <div className="mb-3">:</div>
          <div className="text-xl text-custom text-center ls-2 inline-block px-3 py-1 border border-[#393939] rounded mb-4 bg-[#1D1D1D]">
            05
            <br />
            Hours
          </div>
          <div className="mb-3">:</div>
          <div className="text-xl text-custom text-center ls-2 inline-block px-3 py-1 border border-[#393939] rounded mb-4 bg-[#1D1D1D]">
            10
            <br />
            Min
          </div>
        </div>

        <div className="devider relative text-center">
          <span className="relative inline-block z-20 px-4 bg-black text-[#707070]">
            or
          </span>
        </div>

        <button
          onClickCapture={() => setShowBuy(true)}
          className="btn btn-green flex w-full justify-between items-center border-2 border-[#589B74] bg-[#0E1F17] rounded-md px-4 py-2"
        >
          <div className="flex justify-start items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31.971"
              height="37.108"
              viewBox="0 0 31.971 37.108"
            >
              <path
                id="Subtraction_124"
                data-name="Subtraction 124"
                d="M27.285,37.147H4.685A4.7,4.7,0,0,1,0,32.447,4.77,4.77,0,0,1,.059,31.7L1.383,14.943a4.7,4.7,0,0,1,4.68-4.426H7.319a9,9,0,0,1-.154-1.659,8.82,8.82,0,1,1,17.64,0,8.994,8.994,0,0,1-.154,1.659h1.256a4.693,4.693,0,0,1,4.679,4.438L31.912,31.7a4.8,4.8,0,0,1,.059.749,4.7,4.7,0,0,1-4.684,4.7Zm-4.409-22.2A1.657,1.657,0,1,0,24.531,16.6,1.657,1.657,0,0,0,22.876,14.943Zm-13.781,0A1.657,1.657,0,1,0,10.749,16.6,1.657,1.657,0,0,0,9.1,14.943Zm6.89-11.888A5.8,5.8,0,0,0,10.2,8.861V10.52H21.774V8.859a5.8,5.8,0,0,0-5.788-5.806Z"
                transform="translate(0 -0.039)"
                fill="#fff"
              />
            </svg>
            <span className="ls-2 text-white">Buy License</span>
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
        </button>
      </div>

      {showBuy && (
        <div className="fixed z-50 bg-[#ffffffcc] w-full h-screen top-0 left-0 flex justify-center items-center ">
          <div
            className="text-right absolute z-[100] top-5 bg-[#589b74] h-[60px] w-[60px] flex justify-center items-center rounded-full right-5 cursor-pointer"
            onClick={() => setShowBuy(false)}
          >
            <button className="text-white px-4 py-2 rounded-md md:block hidden">
              <IoCloseSharp className="text-white text-4xl" />
            </button>
          </div>
          <div className="bg-black p-4 w-[65%] h-[80vh] rounded overflow-y-auto">
            <Buy />
          </div>
        </div>
      )}
    </div>
  );
};

export default Subscription;
