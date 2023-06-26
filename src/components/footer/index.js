import React from "react";
import logo from "../../assets/images/eth.png";
import { Link } from "react-router-dom";
import { FaTelegram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pb-4 pt-10">
      <div className="custom-container">
        <section>
          <div className="grid md:grid-cols-3 gap-2">
            <div className="flex items-center gap-[55px] md:w-auto w-full md:justi justify-center">
              <div className="flex md:justify-start justify-center items-center gap-3">
                <Link to="/terms" className="text-white p-1 text-lg">
                  Terms of Use
                </Link>
                <Link to="/privacy-policy" className="text-white p-1 text-lg">
                  Privacy Policy
                </Link>
              </div>
            </div>
            <div className="text-center flex justify-center items-center">
              <img src={logo} alt="logo" className="mr-3" />
              <h1 className="text-white text-2xl font-bold uppercase logo">
                Mev Bot
              </h1>
            </div>
            <div className="text-center flex md:justify-end justify-center items-center ">
              <div className="flex rounded items-center gap-2">
                <Link to="/" className="text-white p-1 bg-[#0E1F17] border-2 border-[#589B74] rounded w-[35px] h-[35px] flex justify-center items-center">
                  <FaTwitter/>
                </Link>
                <Link to="/" className="text-white p-1 bg-[#0E1F17] border-2 border-[#589B74] rounded w-[35px] h-[35px] flex justify-center items-center">
                  <FaTelegram/>
                </Link>
                
              </div>
            </div>
          </div>

          <p className="text-lg text-white mt-4 text-center">Mev Bot © Copyright 2023</p>
        </section>
      </div>
    </div>
  );
};

export default Footer;
