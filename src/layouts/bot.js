import React from "react";
import { Outlet } from "react-router-dom";
import Manage from "../components/manage";
import Activity from "../components/activity";
import RefferCode from "../components/reffer-code";
import Subscription from "../components/subscription";
import BotActivity from "../components/bot-activity";
import BotHero from "../components/bot-hero";
import Footer from "../components/footer";

const BotLayout = () => {
  const manageData = [
    {
      id: 1,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28.812"
          height="23.957"
          viewBox="0 0 28.812 23.957"
        >
          <path
            id="path0"
            d="M11.562,23.831a.856.856,0,0,0,.373-.373l.13-.244V17.971l.66-.038A17.11,17.11,0,0,0,28.712,2.8C28.967.628,28.751-.055,27.833,0c-.405.026-.572.139-.826.559-3.194,5.269-7.789,7.781-14.254,7.791h-.688V5.728c0-3.176-.028-3.29-.825-3.366-.482-.047-.415-.109-5.771,5.089C-.521,13.254-.1,12.786.09,13.511c.052.194,10.372,10.209,10.657,10.345a.807.807,0,0,0,.817-.022"
            transform="translate(28.812 23.957) rotate(180)"
            fill="#fff"
            fill-rule="evenodd"
          />
        </svg>
      ),
      title: "Deposit",
      link: "/bot/deposit",
    },
    {
      id: 2,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28.812"
          height="23.957"
          viewBox="0 0 28.812 23.957"
        >
          <path
            id="path0"
            d="M11.562.125A.856.856,0,0,1,11.935.5l.13.244V5.986l.66.038A17.11,17.11,0,0,1,28.712,21.16c.255,2.168.039,2.852-.879,2.793-.405-.026-.572-.139-.826-.559-3.194-5.269-7.789-7.781-14.254-7.791h-.688v2.625c0,3.176-.028,3.29-.825,3.366-.482.047-.415.109-5.771-5.089C-.521,10.7-.1,11.17.09,10.445.143,10.251,10.462.237,10.747.1a.807.807,0,0,1,.817.022"
            fill="#fff"
            fill-rule="evenodd"
          />
        </svg>
      ),
      title: "Withdraw",
      link: "/bot/withdraw",
    },
    {
      id: 3,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31.971"
          height="32.097"
          viewBox="0 0 31.971 32.097"
        >
          <path
            id="path0"
            d="M68.432,35.213a16,16,0,1,0,18.8,15.178,16.046,16.046,0,0,0-18.8-15.178M71.9,40.972c.807.383.885.75.885,4.149a13.55,13.55,0,0,1-.19,3.481,1.4,1.4,0,0,1-2.626,0,27.551,27.551,0,0,1,.024-6.958,1.363,1.363,0,0,1,1.907-.672m-6.081,2.614c.922.635.948,1.48.078,2.5a7.275,7.275,0,1,0,10.8.024c-1.623-1.886.381-3.863,2.063-2.035a10.177,10.177,0,1,1-15.758,1.008c1.187-1.654,1.982-2.075,2.822-1.5"
            transform="translate(-55.269 -34.943)"
            fill="#fff"
            fill-rule="evenodd"
          />
        </svg>
      ),
      title: "Start Bot",
      link: "/bot",
    },
    {
      id: 4,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31.97"
          height="31.97"
          viewBox="0 0 31.97 31.97"
        >
          <path
            id="Subtraction_39"
            data-name="Subtraction 39"
            d="M-2504.015-4527.03a15.88,15.88,0,0,1-11.3-4.682,15.879,15.879,0,0,1-4.682-11.3,15.879,15.879,0,0,1,4.682-11.3,15.88,15.88,0,0,1,11.3-4.682,16.125,16.125,0,0,1,7.067,1.654,16.134,16.134,0,0,1,5.615,4.6,15.865,15.865,0,0,1,3.3,9.732,15.879,15.879,0,0,1-4.682,11.3A15.88,15.88,0,0,1-2504.015-4527.03Zm-4.5-21.821a1.328,1.328,0,0,0-.946.392,1.327,1.327,0,0,0-.391.946,1.327,1.327,0,0,0,.391.945l3.218,3.216a.272.272,0,0,1,0,.381l-3.216,3.216a1.329,1.329,0,0,0-.391.946,1.329,1.329,0,0,0,.391.946,1.329,1.329,0,0,0,.945.393,1.332,1.332,0,0,0,.946-.393l3.219-3.22a.267.267,0,0,1,.191-.079.266.266,0,0,1,.19.079l3.216,3.216a1.325,1.325,0,0,0,.946.392,1.325,1.325,0,0,0,.946-.392,1.329,1.329,0,0,0,.391-.946,1.329,1.329,0,0,0-.391-.946l-3.219-3.216a.276.276,0,0,1-.079-.191.273.273,0,0,1,.08-.191l3.214-3.214a1.327,1.327,0,0,0,.392-.946,1.327,1.327,0,0,0-.392-.945,1.325,1.325,0,0,0-.946-.392,1.326,1.326,0,0,0-.946.392l-3.217,3.216a.266.266,0,0,1-.191.079.266.266,0,0,1-.19-.079l-3.214-3.214A1.328,1.328,0,0,0-2508.515-4548.851Z"
            transform="translate(2520 4559)"
            fill="#fff"
          />
        </svg>
      ),
      title: "Stop Bot",
      link: "/bot/stop",
    },
  ];
  return (
    <>
      <BotHero />
      <div className="py-8">
        <div className="custom-container">
          <div className="flex md:flex-row flex-col gap-10 justify-between items-start w-full">
            <div className="md:w-3/12 w-full">
              <Manage manageData={manageData} />
              {/* <div className="mt-12">
              <Activity />
            </div> */}
            </div>
            <div className="md:w-6/12 w-full">
              <Outlet />
              {/* <div className="mt-12">
              <BotActivity />
            </div> */}
            </div>
            <div className="md:w-3/12 w-full">
              <Subscription />
              {/* <div className="mt-12">
              <RefferCode />
            </div> */}
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-10 justify-between items-start w-full mt-10">
            <div className="md:w-3/12 w-full">
              <Activity />
            </div>
            <div className="md:w-6/12 w-full">
              <BotActivity />
            </div>
            <div className="md:w-3/12 w-full">
              <RefferCode />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default BotLayout;
