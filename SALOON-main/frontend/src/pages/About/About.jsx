import React from 'react'

import Navbar from '../../components/Navbar/Navbar'
import AboutUs from '../../components/AboutUs/AboutUs'
import Footer from '../../components/Footer/Footer'

const About = () => {
    return (
    <>
    <div>
        <Navbar/>
    </div>
    
    <div>
        <AboutUs/>
    </div>

    <div>
        <Footer/>
    </div>
    </>
    )
}

export default About