import React from "react";
import shape from "../../assets/images/svg/shape-gray.svg";
import { Link } from "react-router-dom";

const Stop = () => {
    return (
        <div className="feature-card rounded-md">
            <div className="inline-flex items-center py-3 pl-4 pr-4 bg-[#393939] rounded-t-md relative">
                <div className="relative z-20 flex justify-start items-center">
                    {/* <img src={item.img} alt="" /> */}
                    <h1 className="text-white text-xl ml-2">Mempool</h1>
                </div>
                <img
                    src={shape}
                    alt=""
                    className="shape absolute h-full right-[-50px]"
                />
            </div>

            <div className="border-2 min-h-[150px] flex flex-col gap-4 border-[#393939] p-5 rounded-r rounded-b">
                <div className="py-10 text-center">
                    <Link to="/bot" className="btn powerbtn block mx-auto text-center">
                        <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="61.828" height="62.048" viewBox="0 0 61.828 62.048">
                            <path id="path0" d="M80.716,35.465A31.025,31.025,0,0,0,63.865,87.343c19.751,20.573,54.152,6,53.189-22.536-.63-18.673-18.12-32.8-36.339-29.341m6.7,11.131c1.56.741,1.712,1.449,1.712,8.02,0,4.4-.091,6.065-.368,6.729a2.7,2.7,0,0,1-5.076,0C83.115,60,83.153,49.1,83.725,47.9a2.635,2.635,0,0,1,3.686-1.3M75.656,51.65c1.782,1.228,1.833,2.862.152,4.831C67.8,65.866,74.053,80,86.217,80c12.116,0,18.44-14.192,10.459-23.47-3.137-3.647.736-7.468,3.988-3.935C112.3,65.24,103.4,85.607,86.217,85.631A19.654,19.654,0,0,1,70.2,54.543c2.295-3.2,3.832-4.012,5.455-2.893" transform="translate(-55.246 -34.943)" fill="#fff" fill-rule="evenodd" />
                        </svg>
                    </Link>
                    <p className="mt-5 ls-2 text-lg">
                        Please stop the bot to <br/>
                        stop Sanning the Mempool
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Stop;
