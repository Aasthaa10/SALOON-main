import React from 'react'

import Navbar from '../../components/Navbar/Navbar'

import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Service from '../../components/Service/Service'
import WhyCUs from '../../components/WhyCUs/WhyCUs'
import Description from '../../components/Description/Description'

const Home = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>

            <div>
                <Hero/>
                <Description/>
                <Service/>
                <WhyCUs/>
            </div>
<hr />
            <div>
                <Footer/>
            </div>
        </>
    )
}

export default Home