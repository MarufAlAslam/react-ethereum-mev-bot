import React from 'react'
import { Link } from 'react-router-dom'

const Buy = () => {
    const packages = [
        {
            id: 1,
            name: "Montly",
            popular: false,
            price: 5,
            plan: "per month",
            included: [
                "No Trial Period",
                "Unlock Full Bot Potential",
                "Max Profit per Cycle",
                "24/7 Priority support",
                "15% Bot's fee"
            ]
        },
        {
            id: 2,
            name: "Yearly",
            popular: true,
            price: 10,
            plan: "per month",
            included: [
                "No Trial Period",
                "Unlock Full Bot Potential",
                "Max Profit per Cycle",
                "24/7 Priority support",
                "7% Bot's fee"
            ]
        }
    ]
    return (
        <div className='buy py-6'>
            <div className='custom-container'>
                <div className="border border-[#393939] rounded-md flex items-center overflow-hidden">
                    <button className="text-white p-4 tab-btn active rounded border-r border-[#393939]">
                        Buy License
                    </button>
                </div>

                <div className="mt-10 grid md:grid-cols-2 grid-cols-1 gap-12">
                    {
                        packages.map(pack => (
                            <div key={pack.id} className='p-10 border border-[#393939] rounded'>
                                <div className='flex justify-between items-center'>
                                    <h2 className='text-4xl font-extrabold text-white'>
                                        {pack.name}
                                    </h2>
                                    <div className='text-rigth flex flex-col justify-end items-end'>
                                        <h2 className='text-3xl'>
                                            {pack.price} ETH
                                        </h2>
                                        <p className='text-[#707070]'>
                                            /{pack.plan}
                                        </p>
                                    </div>
                                </div>

                                <div className='h-[1px] w-full bg-[#707070] my-6'></div>

                                <p className='text-[#707070] font-semibold text-xl mb-4'>
                                    Plan Includes
                                </p>

                                {
                                    pack.included.map((item, index) => (
                                        <div className='flex justify-start items-center gap-4 mb-6'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="41.565" height="38.133" viewBox="0 0 41.565 38.133">
                                                <g id="checkmark" transform="translate(0.005 -0.007)">
                                                    <path id="Caminho_536" data-name="Caminho 536" d="M19.069,38.14A19.066,19.066,0,1,1,29.354,3.023a1.3,1.3,0,0,1-1.406,2.189,16.464,16.464,0,1,0,7.586,13.863c0-.542-.026-1.081-.076-1.608a1.3,1.3,0,1,1,2.588-.251q.088.918.088,1.86A19.088,19.088,0,0,1,19.069,38.14Zm0,0" fill="#fff" />
                                                    <path id="Caminho_537" data-name="Caminho 537" d="M158.457,43a1.291,1.291,0,0,1-.918-.381l-7.8-7.8a1.3,1.3,0,1,1,1.839-1.839l6.881,6.881,18.145-18.145a1.3,1.3,0,0,1,1.839,1.839L159.383,42.615a1.3,1.3,0,0,1-.92.379Zm0,0" transform="translate(-137.221 -19.587)" fill="#fff" />
                                                </g>
                                            </svg>

                                            <p className='text-white text-lg'>
                                                {item}
                                            </p>
                                        </div>
                                    ))
                                }

                                <Link to={'/bot/start'} className="btn btn-green flex mt-8 w-full justify-between items-center border-2 border-[#589B74] bg-[#0E1F17] rounded-md px-4 py-3">
                                    <div className="flex justify-start items-center gap-3">
                                        <span className="ls-2 text-white">Buy Now</span>
                                    </div>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="22.428" height="18.695" viewBox="0 0 22.428 18.695">
                                        <path id="arrow" d="M8.933,20.41H27.578l-7.139-6.8a.936.936,0,1,1,1.289-1.357l8.151,7.769a1.866,1.866,0,0,1-.016,2.661l-8.141,7.75a.936.936,0,0,1-1.289-1.357l7.169-6.8H8.933a.933.933,0,1,1,0-1.866Z" transform="translate(-8 -11.997)" fill="#fff" />
                                    </svg>

                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Buy