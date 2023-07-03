import React from "react";
import iocn1 from "../../assets/images/svg/icon1.svg";
import icon2 from "../../assets/images/svg/icon2.svg";
import icon3 from "../../assets/images/svg/icon3.svg";
import icon4 from "../../assets/images/svg/icon4.svg";
import icon5 from "../../assets/images/svg/icon5.svg";
import icon6 from "../../assets/images/svg/icon6.svg";
import icon7 from "../../assets/images/svg/icon7.svg";
import icon8 from "../../assets/images/svg/icon8.svg";
import shape from "../../assets/images/svg/shape.svg";

const Features = () => {
  const featureData = [
    {
      id: 1,
      title: "Highest Profits",
      img: iocn1,
      desc: "2-15% per work cycle",
    },
    {
      id: 2,
      title: "No Risk",
      img: icon2,
      desc: "The probability of losing money is fantastically low",
    },
    {
      id: 3,
      title: "Safe",
      img: icon3,
      desc: "All wallet access is under your control",
    },
    {
      id: 4,
      title: "Ai on Board",
      img: icon4,
      desc: "AI monitors, finds, analyses. Specially trainned AI will do what human cannot",
    },
    {
      id: 5,
      title: "Fully Automatic",
      img: icon5,
      desc: "All you have to do is have internet and a computer or mobile.",
    },
    {
      id: 6,
      title: "User Friendly",
      img: icon6,
      desc: "You don't need to be a programmer, know smart contract and solidity, set up the bot and run it",
    },
    {
      id: 7,
      title: "Web3",
      img: icon7,
      desc: "Secure and private at highest technological level",
    },
    {
      id: 8,
      title: "Easy to Use",
      img: icon8,
      desc: "User Friendly and intuitive interface",
    },
  ];
  return (
    <div className="features py-12">
      <div className="custom-container">
        <div className="border border-[#393939] rounded-md flex items-center overflow-hidden">
          <button className="text-white p-4 tab-btn active rounded border-r border-[#393939]">
            Features
          </button>
        </div>

        <div className="mt-10">
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6">
            {featureData.map((item, index) => (
              <div key={index} className="feature-card rounded-md">
                <div className="inline-flex items-center py-3 pl-4 pr-4 bg-[#94FEBF] rounded-t-md relative">
                  <div className="relative z-20 flex justify-start items-center">
                    <img src={item.img} alt="" />
                    <h1 className="text-black text-xl ml-2">{item.title}</h1>
                  </div>
                  <img
                    src={shape}
                    alt=""
                    className="shape absolute h-full right-[-40px]"
                  />
                </div>

                <div className="card-body bg-[#0E1F17] border-2 border-[#589B74] rounded-r-md rounded-b-md p-6 min-h-[170px]">
                  <p className="text-white text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
