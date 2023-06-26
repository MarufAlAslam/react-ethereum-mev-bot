import React from "react";
// import shape from "../../assets/images/svg/shape-gray.svg";
import shape from "../../assets/images/shape.png";

import lin from "../../assets/images/svg/in.svg";
import { Link } from "react-router-dom";

import t1 from "../../assets/images/t1.jpg";
import t2 from "../../assets/images/t2.jpg";
import t3 from "../../assets/images/t3.jpg";

const Team = () => {
  const teamData = [
    {
      id: 1,
      name: "Eygeny Frolov",
      title: "Data Scientist",
      twitter: "https://twitter.com/amandakenny",
      linkedin: "https://www.linkedin.com/in/eefrolov/",
      image: t1,
    },
    {
      id: 2,
      name: "Rohit Aggarwal",
      title: "Ethereum Developer",
      twitter: "https://twitter.com/amandakenny",
      linkedin: "https://www.linkedin.com/in/rohit-aggarwal-6045a6b7/",
      image: t2,
    },
    {
      id: 3,
      name: "Ruslan Astapov",
      title: "Full Stack Developer",
      twitter: "https://twitter.com/amandakenny",
      linkedin: "https://www.linkedin.com/in/ruslan-astapov-a010a520b/",
      image: t3,
    },
  ];
  return (
    <div className="team py-12">
      <div className="custom-container">
        <div className="border border-[#393939] rounded-md flex items-center overflow-hidden">
          <button className="text-white p-4 tab-btn active rounded border-r border-[#393939]">
            Our Team
          </button>
        </div>

        <div className="mt-10">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
            {teamData.map((item, index) => (
              <div key={index} className="feature-card rounded-md">
                <div className="inline-flex items-center py-3 pl-4 pr-4 bg-[#393939] rounded-t-md relative">
                  <div className="relative z-20 flex justify-start items-center">
                    {/* <img src={item.img} alt="" /> */}
                    <h1 className="text-white text-xl ml-2">{item.name}</h1>
                  </div>
                  <img
                    src={shape}
                    alt=""
                    className="shape absolute h-full right-[-50px]"
                  />
                </div>

                <div className="card-body text-center bg-[#1D1D1D] border-2 border-[#393939] agargao-[#4C775D] rounded-r-md rounded-b-md p-8">
                  <div className="inline-block mx-auto border-4 rounded-full border-[#4C775D] mb-4">
                    <img
                      src={item.image}
                      alt=""
                      className="block mx-auto w-[100px] h-[100px] object-cover object-top rounded-full border-4 border-transparent"
                    />
                  </div>
                  <h1 className="text-white text-xl mb-2">{item.title}</h1>

                  <div className="flex mt-4 justify-center items-center gap-3">
                    <Link to={item.linkedin} target="_blank">
                      <img src={lin} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
