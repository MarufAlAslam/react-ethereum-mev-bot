import { Switch } from 'antd'
import React from 'react'
import { FaArrowRight, FaCog } from 'react-icons/fa'

const Settings = () => {
    const dexbtnactive = (e) => {
        const dexbtn = document.querySelectorAll('.dexbtn')
        dexbtn.forEach(btn => btn.classList.remove('active'))
        e.target.classList.add('active')
    }

    const stratBtnActive = (e) => {
        const stratBtn = document.querySelectorAll('.stratBtn')
        stratBtn.forEach(btn => btn.classList.remove('active'))
        e.target.classList.add('active')
    }

    const poolBtnActive = (e) => {
        const poolBtn = document.querySelectorAll('.poolBtn')
        poolBtn.forEach(btn => btn.classList.remove('active'))
        e.target.classList.add('active')
    }

    const cycleBtnActive = (e) => {
        const cycleBtn = document.querySelectorAll('.cycleBtn')
        cycleBtn.forEach(btn => btn.classList.remove('active'))
        e.target.classList.add('active')
    }
    return (
        <div className='py-6'>
            <div className='custom-container'>
                <div className="border border-[#393939] rounded-md flex items-center overflow-hidden">
                    <button className="text-white p-4 tab-btn active rounded border-r border-[#393939]">
                        Choose Dex
                    </button>
                </div>
                <div className='flex md:flex-row flex-col mt-4 justify-start items-center gap-4'>
                    <button onClick={dexbtnactive} className='text-white dexbtn dex1 active p-4 tab-btn w-[200px] h-[50px] rounded border border-[#393939]'>
                       
                    </button>
                    <button onClick={dexbtnactive} className='text-white dexbtn dex2 p-4 tab-btn w-[200px] h-[50px] rounded border border-[#393939]'>
                       

                    </button>
                    <button onClick={dexbtnactive} className='text-white dexbtn dex3 bg-[#000403] p-4 tab-btn w-[200px] h-[50px] rounded border border-[#393939]'>
                        

                    </button>
                </div>



                <div className="border mt-28 border-[#393939] rounded-md flex items-center overflow-hidden">
                    <button className="text-white p-4 tab-btn active rounded border-r border-[#393939]">
                        Capital Stategy
                    </button>
                </div>
                <div className='flex md:flex-row flex-col mt-4 justify-start items-center gap-4'>
                    <button onClick={stratBtnActive} className='text-white stratBtn active p-4 tab-btn rounded border border-[#393939]'>
                        Limited
                    </button>
                    <button onClick={stratBtnActive} className='text-white stratBtn p-4 tab-btn rounded border border-[#393939]'>
                        Progressive
                    </button>
                </div>



                <div className="border mt-28 border-[#393939] rounded-md flex items-center overflow-hidden">
                    <button className="text-white p-4 tab-btn active rounded border-r border-[#393939]">
                        Liquidity Pool Age
                    </button>
                </div>
                <div className='flex md:flex-row flex-col mt-4 justify-start items-center gap-4'>
                    <button onClick={poolBtnActive} className='text-white poolBtn active p-4 tab-btn rounded border border-[#393939]'>
                        Over 1 Year
                    </button>
                    <button onClick={poolBtnActive} className='text-white poolBtn p-4 tab-btn rounded border border-[#393939]'>
                        Over 6 Months
                    </button>
                    <button onClick={poolBtnActive} className='text-white poolBtn p-4 tab-btn rounded border border-[#393939]'>
                        Over 3 Months
                    </button>
                    <button onClick={poolBtnActive} className='text-white poolBtn p-4 tab-btn rounded border border-[#393939]'>
                        Over 1 Month
                    </button>
                </div>



                <div className="border mt-28 border-[#393939] rounded-md flex items-center overflow-hidden">
                    <button className="text-white p-4 tab-btn active rounded border-r border-[#393939]">
                        Bot Work Cycle
                    </button>
                </div>
                <div className='flex md:flex-row flex-col mt-4 justify-start items-center gap-4'>
                    <button onClick={cycleBtnActive} className='text-white cycleBtn active p-4 tab-btn rounded border border-[#393939]'>
                        6 hours
                    </button>
                    <button onClick={cycleBtnActive} className='text-white cycleBtn p-4 tab-btn rounded border border-[#393939]'>
                        12 hours
                    </button>
                    <button onClick={cycleBtnActive} className='text-white cycleBtn p-4 tab-btn rounded border border-[#393939]'>
                        24 hours
                    </button>
                    <button onClick={cycleBtnActive} className='text-white cycleBtn p-4 tab-btn rounded border border-[#393939]'>
                        48 hours
                    </button>
                </div>



                <div className="mt-28 flex md:flex-row flex-col justify-between items-center">
                    <div className='flex md:flex-row flex-col justify-start items-center md:gap-4 md:w-auto w-full'>
                        <button className="text-white p-4 tab-btn active rounded border border-[#393939]">
                            <Switch className='mr-2' />  Exclude Deflationary Tokens
                        </button>

                        <button className='flex py-4 px-6 sv rounded justify-between items-center gap-4 bg-[#0E1F17] border border-[#589B74]'>
                            Save <FaArrowRight />
                        </button>
                    </div>
                    <button className='flex py-4 px-6 rounded justify-between items-center sv gap-4 bg-[#0E1F17] border border-[#589B74]'>
                       <FaCog/> Default Settings
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Settings