import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/eth.png";
import Rain from "../rain";
import { Dropdown } from "antd";

const Hero = () => {
  const items = [
    {
      key: "1",
      label: <Link to={"/"}>Home</Link>,
    },
    {
      key: "2",
      label: <Link to={"/"}>Documentation</Link>,
    },
    {
      key: "3",
      label: <Link to={"/"}>Connect Wallet</Link>,
    },
  ];
  return (
    <div className="hero py-7 bg-black">
      <div className="custom-container">
        {/* topbar */}
        <section>
          <div className="grid md:grid-cols-3 grid-cols-2 gap-2">
            <div className="md:flex items-center gap-[55px] hidden">
              <NavLink to="/bot" className="text-lg text-white">
                Home
              </NavLink>
              <NavLink to="/docs" className="text-lg text-white">
                Documentation
              </NavLink>
            </div>
            <NavLink
              to={"/"}
              className="text-center flex md:justify-center items-center"
            >
              <img src={logo} alt="logo" className="mr-3 md:w-auto w-[20px]" />
              <h1 className="text-white md:text-2xl text-lg font-bold uppercase logo">
                Mev Bot
              </h1>
            </NavLink>
            <div className="text-center flex justify-end items-center ">
              <div className="md:bg-[#242424] flex rounded items-center">
                <div className="icon-holder p-3 px-4 md:bg-[#0E1F17] border-2 border-[#589B74] rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27.818"
                    height="22.977"
                    viewBox="0 0 27.818 22.977"
                    className="mobile-icon"
                  >
                    <path
                      id="path0"
                      d="M2.945,34.66A4.026,4.026,0,0,0-.128,37.616c-.16.626-.16,16.322,0,16.949a4.041,4.041,0,0,0,2.775,2.881l.407.127H24.285l.407-.127a4.041,4.041,0,0,0,2.775-2.881,10.463,10.463,0,0,0,.1-2.457V50.053H23.59c-4.8,0-4.848-.008-5.948-.84a3.965,3.965,0,0,1,.777-6.714c.774-.373.732-.37,5.171-.371h3.977V40.073a10.47,10.47,0,0,0-.1-2.457,4.07,4.07,0,0,0-2.747-2.881l-.38-.128L13.8,34.6c-8.594-.008-10.592,0-10.858.063m16.7,9.048a2.433,2.433,0,0,0-.635,4.55c.538.262.76.276,4.8.276h3.759V43.647l-3.814.006c-2.1,0-3.949.028-4.11.055m1.884,1.73a.745.745,0,0,1,0,1.3,2.181,2.181,0,0,1-2.107-.285.741.741,0,0,1,.285-1.019,3.5,3.5,0,0,1,1.82,0"
                      transform="translate(0.248 -34.596)"
                      fill="#fff"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
                <button className="text-white px-4 py-2 rounded-md md:block hidden">
                  Connect Wallet
                </button>
                <Dropdown
                  menu={{
                    items,
                  }}
                  placement="bottomRight"
                >
                  <button className="text-white ml-4 px-4 py-2 md:hidden block icon-holder p-3 md:bg-[#0E1F17] border-2 border-[#589B74] rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20.343"
                      height="28.622"
                      viewBox="0 0 24.343 21.622"
                    >
                      <g
                        id="Group_163012"
                        data-name="Group 163012"
                        transform="translate(-307.192 -93)"
                      >
                        <path
                          id="Caminho_1848"
                          data-name="Caminho 1848"
                          d="M22.1,64.267H2.239a1.845,1.845,0,1,0,0,3.6H22.1a1.845,1.845,0,1,0,0-3.6Z"
                          transform="translate(307.193 28.733)"
                          fill="#fff"
                        />
                        <path
                          id="Caminho_1849"
                          data-name="Caminho 1849"
                          d="M22.1,208.867H2.239a1.845,1.845,0,1,0,0,3.6H22.1a1.845,1.845,0,1,0,0-3.6Z"
                          transform="translate(307.193 -106.858)"
                          fill="#fff"
                        />
                        <path
                          id="Caminho_1850"
                          data-name="Caminho 1850"
                          d="M22.1,353.467H2.239a1.845,1.845,0,1,0,0,3.6H22.1a1.845,1.845,0,1,0,0-3.6Z"
                          transform="translate(307.193 -242.449)"
                          fill="#fff"
                        />
                      </g>
                    </svg>
                  </button>
                </Dropdown>
              </div>
            </div>
          </div>
        </section>
        {/* topbar */}
      </div>
      {/* matrix */}
      <div className="h-[200px] w-full relative">
        <h1 className="text-center text-[#00FFA2] uppercase md:text-[65px] text-[50px] spacing font-bold bg-transparent absolute poppins left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] lh-1">
          Ethereum Mev Bot
        </h1>

        <Rain />
        {/* create custom matrix digital rain */}
      </div>
      {/* matrix */}
    </div>
  );
};

export default Hero;
