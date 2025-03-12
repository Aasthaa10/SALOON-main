import React from 'react'

import Navbar from '../../components/Navbar/Navbar'
import ContactUs from '../../components/ContactUs/ContactUs'
import Footer from '../../components/Footer/Footer'

const Contact = () => {
    return (
        <>
        <div>
            <Navbar/>
        </div>

        <div>
            <ContactUs/>
        </div>

        <div>
            <Footer/>
        </div>
        </>
    )
}

export default Contact