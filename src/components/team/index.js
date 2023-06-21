import React from "react";
import team from "../../assets/images/team.png";
// import shape from "../../assets/images/svg/shape-gray.svg";
import shape from "../../assets/images/shape.png";

import tw from "../../assets/images/svg/tw.svg";
import lin from "../../assets/images/svg/in.svg";
import { Link } from "react-router-dom";

const Team = () => {
  const teamData = [
    {
      id: 1,
      name: "Amanda Kenny",
      title: "Manager",
      twitter: "https://twitter.com/amandakenny",
      linkedin: "https://www.linkedin.com/in/amanda-kenny-9b1b1b1b1/",
      image: team,
    },
    {
      id: 2,
      name: "Amanda Kenny",
      title: "Manager",
      twitter: "https://twitter.com/amandakenny",
      linkedin: "https://www.linkedin.com/in/amanda-kenny-9b1b1b1b1/",
      image: team,
    },
    {
      id: 3,
      name: "Amanda Kenny",
      title: "Manager",
      twitter: "https://twitter.com/amandakenny",
      linkedin: "https://www.linkedin.com/in/amanda-kenny-9b1b1b1b1/",
      image: team,
    },
    {
      id: 4,
      name: "Amanda Kenny",
      title: "Manager",
      twitter: "https://twitter.com/amandakenny",
      linkedin: "https://www.linkedin.com/in/amanda-kenny-9b1b1b1b1/",
      image: team,
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
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-6">
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

                <div className="card-body text-center bg-[#1D1D1D] border-2 border-[#393939] rounded-r-md rounded-b-md p-8">
                  <img src={item.image} alt="" className="block mx-auto mb-4" />
                  <h1 className="text-white text-xl mb-2">{item.title}</h1>

                  <div className="flex mt-4 justify-center items-center gap-3">
                    <Link to={item.twitter} target="_blank">
                      <img src={tw} alt="" />
                    </Link>
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
