import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Appointment from '../../components/Appointment/Appointment'

const Book = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>

            <div>
                <Appointment />
            </div>

            <div>
                <Footer />
            </div>
        </>
    )
}

export default Book