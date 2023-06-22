import React from 'react'
import Hero from '../components/hero'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer'

const MainLayout = () => {
    return (
        <div>
            <Hero/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default MainLayout