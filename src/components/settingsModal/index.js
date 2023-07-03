import React from "react";
import Settings from "../../pages/settings";
import { IoCloseSharp } from "react-icons/io5";

const SettingsModal = ({ setShowSettings }) => {
  return (
    <div className="fixed z-50 bg-[#ffffffcc] w-full h-screen top-0 left-0 flex justify-center items-center ">
      <div
        className="text-right absolute z-[100] top-5 bg-[#589b74] h-[60px] w-[60px] flex justify-center items-center rounded-full right-5 cursor-pointer"
        onClick={() => setShowSettings(false)}
      >
        <button className="text-white px-4 py-2 rounded-md md:block hidden">
          <IoCloseSharp className="text-white text-4xl" />
        </button>
      </div>

      <div className="bg-black p-4 w-[95%] h-[75vh] rounded overflow-y-scroll">
        <div className="text-center my-5">
          <h1 className="text-3xl uppercase font-bold text-[#589b74]">Settings</h1>
        </div>
        <Settings />
      </div>
    </div>
  );
};

export default SettingsModal;
