import React from "react";
import iocn1 from "../../assets/images/svg/icon1.svg";

const Features = () => {
  const featureData = [
    {
      id: 1,
      title: "Highest Profits",
      img: iocn1,
      desc: "Lorem Ipsum is simply dummy text of the prin ting and type setting industry. Lorem Ipsum.",
    },
  ];
  return (
    <div className="features py-6">
      <div className="custom-container">
        <div className="border border-[#393939] rounded-md flex items-center overflow-hidden">
          <button className="text-white p-4 tab-btn active rounded border-r border-[#393939]">
            Features
          </button>
        </div>

        <div className="mt-10">
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4">
            {featureData.map((item, index) => (
              <div className="feature-card bg-[#242424] rounded-md p-6">
                <div className="flex items-center gap-4 bg-[#94FEBF]">
                  <img src={item.img} alt="" />
                  <h1 className="text-black text-xl ml-2">
                    {item.title}
                  </h1>
                </div>

                <p className="text-white text-base mt-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
