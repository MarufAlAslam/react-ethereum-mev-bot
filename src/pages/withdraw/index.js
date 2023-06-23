import React from "react";
import shape from "../../assets/images/svg/shape-gray.svg";

const Withdraw = () => {
    return (
        <div className="feature-card rounded-md">
            <div className="inline-flex items-center py-3 pl-4 pr-4 bg-[#393939] rounded-t-md relative">
                <div className="relative z-20 flex justify-start items-center">
                    {/* <img src={item.img} alt="" /> */}
                    <h1 className="text-white text-xl ml-2">Withdraw Amount</h1>
                </div>
                <img
                    src={shape}
                    alt=""
                    className="shape absolute h-full right-[-50px]"
                />
            </div>

            <div className="border-2 min-h-[150px] flex flex-col gap-4 border-[#393939] p-5 rounded-r rounded-b">

                <div className="mt-6 text-center">
                    <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="61.804" height="62.048" viewBox="0 0 61.804 62.048">
                        <path id="Subtraction_41" data-name="Subtraction 41" d="M-4818.265-4496.952h0a29.8,29.8,0,0,1-11.586-2.322,31.483,31.483,0,0,1-10.552-7.326,31.289,31.289,0,0,1-5.136-7.092,29.964,29.964,0,0,1-2.8-7.766,31.082,31.082,0,0,1,.84-15.854,31.367,31.367,0,0,1,8.632-13.558,30.534,30.534,0,0,1,6.894-4.767,31.888,31.888,0,0,1,8.424-2.841,29.85,29.85,0,0,1,5.541-.522,29.952,29.952,0,0,1,11.514,2.309,31.358,31.358,0,0,1,9.7,6.336,30.664,30.664,0,0,1,9.583,21.219,31.639,31.639,0,0,1-2.1,12.674,29.911,29.911,0,0,1-6.392,9.938A31.541,31.541,0,0,1-4818.265-4496.952Zm2.939-43.048a.807.807,0,0,0-.427.123l0,0a.86.86,0,0,0-.374.373l-.129.244v5.243l-.661.038a17.083,17.083,0,0,0-15.987,15.137c-.175,1.485-.123,2.229.18,2.57a.748.748,0,0,0,.6.227c.032,0,.065,0,.1,0a.889.889,0,0,0,.827-.558,15.67,15.67,0,0,1,5.9-5.868,17.067,17.067,0,0,1,8.353-1.923h.689v2.625c0,3.163.031,3.289.825,3.366h.024a1.027,1.027,0,0,0,.106.007c.388,0,.778-.378,5.552-5.011l.089-.086,1.1-1.069c4.483-4.341,4.483-4.341,4.314-4.859-.013-.042-.027-.084-.04-.133-.027-.1-2.735-2.762-5.241-5.194s-5.271-5.081-5.416-5.15A.8.8,0,0,0-4815.326-4540Z" transform="translate(4848.999 4559)" fill="#fff" />
                    </svg>

                    <p className="mt-3 text-xl text-white mb-3">
                        Withdraw ETH
                    </p>
                </div>
                <form className="md:w-[60%] mx-auto mb-6">
                    <input type="text" placeholder="0 ETH..." className="border-2 text-lg w-full bg-[#0E1F17] border-[#589B74] placeholder:text-white px-5 py-2 rounded-md p-2" />

                    <p className="mt-2 mb-5 text-[#3BDC7E] text-center text-lg">
                        Minimum Withdraw 0.05 ETH
                    </p>

                    <button className="btn py-3 btn-green flex w-full justify-between items-center border-2 border-[#589B74] bg-[#0E1F17] rounded-md px-4">
                        <div className="flex justify-start items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28.812" height="23.957" viewBox="0 0 28.812 23.957">
                                <path id="path0" d="M11.562,23.831a.856.856,0,0,0,.373-.373l.13-.244V17.971l.66-.038A17.11,17.11,0,0,0,28.712,2.8C28.967.628,28.751-.055,27.833,0c-.405.026-.572.139-.826.559-3.194,5.269-7.789,7.781-14.254,7.791h-.688V5.728c0-3.176-.028-3.29-.825-3.366-.482-.047-.415-.109-5.771,5.089C-.521,13.254-.1,12.786.09,13.511c.052.194,10.372,10.209,10.657,10.345a.807.807,0,0,0,.817-.022" transform="translate(28.812 23.957) rotate(180)" fill="#fff" fill-rule="evenodd" />
                            </svg>

                            <span className="ls-2 text-white">Withdraw</span>
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" width="22.428" height="18.695" viewBox="0 0 22.428 18.695">
                            <path id="arrow" d="M8.933,20.41H27.578l-7.139-6.8a.936.936,0,1,1,1.289-1.357l8.151,7.769a1.866,1.866,0,0,1-.016,2.661l-8.141,7.75a.936.936,0,0,1-1.289-1.357l7.169-6.8H8.933a.933.933,0,1,1,0-1.866Z" transform="translate(-8 -11.997)" fill="#fff" />
                        </svg>

                    </button>
                </form>
            </div>
        </div>
    );
};

export default Withdraw;
